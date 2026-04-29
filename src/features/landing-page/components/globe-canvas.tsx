'use client'

import * as am5 from '@amcharts/amcharts5'
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow'
import * as am5map from '@amcharts/amcharts5/map'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import { useEffect, useRef } from 'react'

const LANGUAGES = [
  { name: 'English', native: 'English', code: 'gb', lat: 51.5, lng: -0.1 },
  { name: 'Spanish', native: 'Español', code: 'es', lat: 40.4, lng: -3.7 },
  { name: 'French', native: 'Français', code: 'fr', lat: 46.2, lng: 2.2 },
  { name: 'German', native: 'Deutsch', code: 'de', lat: 51.2, lng: 10.4 },
  { name: 'Italian', native: 'Italiano', code: 'it', lat: 41.9, lng: 12.5 },
  { name: 'Portuguese', native: 'Português', code: 'pt', lat: 38.7, lng: -9.1 },
  { name: 'Dutch', native: 'Nederlands', code: 'nl', lat: 52.1, lng: 5.3 },
  { name: 'Japanese', native: '日本語', code: 'jp', lat: 36.2, lng: 138.3 },
  { name: 'Chinese', native: '中文', code: 'cn', lat: 35.9, lng: 104.2 },
  { name: 'Korean', native: '한국어', code: 'kr', lat: 36.5, lng: 127.9 },
  { name: 'Russian', native: 'Русский', code: 'ru', lat: 55.7, lng: 37.6 },
  { name: 'Arabic', native: 'العربية', code: 'sa', lat: 23.9, lng: 45.1 },
  { name: 'Hindi', native: 'हिन्दी', code: 'in', lat: 20.6, lng: 78.9 },
  { name: 'Turkish', native: 'Türkçe', code: 'tr', lat: 38.9, lng: 35.2 },
  { name: 'Polish', native: 'Polski', code: 'pl', lat: 51.9, lng: 19.1 },
  { name: 'Swedish', native: 'Svenska', code: 'se', lat: 60.1, lng: 18.6 },
]

/**
 * Returns the Z depth of a lat/lng point after the globe has been rotated.
 * Positive = front-facing, 0 = on the limb, negative = back-facing.
 */
function getDepth(lat: number, lng: number, rotXDeg: number, rotYDeg: number) {
  const latRad = (lat * Math.PI) / 180
  const lngRad = (lng * Math.PI) / 180
  const rotX = (rotXDeg * Math.PI) / 180
  const rotY = (rotYDeg * Math.PI) / 180

  const cosLat = Math.cos(latRad)
  const x = cosLat * Math.sin(lngRad)
  const y = Math.sin(latRad)
  const z = cosLat * Math.cos(lngRad)

  // Rotate around Y by rotX
  const cosRX = Math.cos(rotX)
  const sinRX = Math.sin(rotX)
  const z1 = -x * sinRX + z * cosRX

  // Rotate around X by rotY
  const cosRY = Math.cos(rotY)
  const sinRY = Math.sin(rotY)
  const z2 = y * sinRY + z1 * cosRY

  return z2
}

export function GlobeCanvas() {
  const chartDivRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = chartDivRef.current
    if (!el) return

    const root = am5.Root.new(el)
    root.setThemes([am5themes_Animated.new(root)])

    root.interfaceColors.set('background', am5.color(0x000000))
    root.interfaceColors.set('grid', am5.color(0x333333))

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: 'rotateX',
        panY: 'rotateY',
        projection: am5map.geoOrthographic(),
        paddingBottom: 0,
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        wheelable: false,
      })
    )

    const backgroundSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {})
    )
    backgroundSeries.mapPolygons.template.setAll({
      fill: am5.color(0x0a0a0a),
      fillOpacity: 1,
      strokeOpacity: 0,
    })
    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180),
    })

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
      })
    )

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
      interactive: true,
      fill: am5.color(0x1a1a1a),
      stroke: am5.color(0x2a2a2a),
      strokeWidth: 0.5,
    })

    polygonSeries.mapPolygons.template.states.create('hover', {
      fill: am5.color(0x2a2a2a),
    })

    const graticuleSeries = chart.series.unshift(
      am5map.GraticuleSeries.new(root, { step: 10 })
    )
    graticuleSeries.mapLines.template.setAll({
      stroke: am5.color(0xffffff),
      strokeOpacity: 0.04,
    })

    const bulletSprites = new Map<string, am5.Container>()

    const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}))

    function makeFlagBullet(
      bulletRoot: am5.Root,
      _series: am5.Series,
      dataItem: am5.DataItem<am5map.IMapPointSeriesDataItem>
    ) {
      const container = am5.Container.new(bulletRoot, {})
      const ctx = dataItem.dataContext as Record<string, string>

      container.children.push(
        am5.Rectangle.new(bulletRoot, {
          width: 24,
          height: 20,
          fillOpacity: 0,
          centerX: am5.p50,
          centerY: am5.p50,
        })
      )

      container.children.push(
        am5.Picture.new(bulletRoot, {
          width: 16,
          height: 12,
          src: `https://flagcdn.com/${ctx.code}.svg`,
          centerX: am5.p50,
          centerY: am5.p50,
        })
      )

      container.set('tooltipText', `${ctx.native} (${ctx.name})`)

      bulletSprites.set(ctx.code, container)

      return am5.Bullet.new(bulletRoot, { sprite: container })
    }

    pointSeries.bullets.push(makeFlagBullet)

    pointSeries.data.setAll(
      LANGUAGES.map((l) => ({
        geometry: { type: 'Point' as const, coordinates: [l.lng, l.lat] },
        code: l.code,
        name: l.name,
        native: l.native,
        lat: l.lat,
        lng: l.lng,
      }))
    )

    function updateBullets(rotation: number) {
      const rotY = chart.get('rotationY') || 0
      LANGUAGES.forEach((lang) => {
        const sprite = bulletSprites.get(lang.code)
        if (!sprite) return
        const depth = getDepth(lang.lat, lang.lng, rotation, rotY)
        if (depth <= 0) {
          sprite.set('opacity', 0)
          sprite.set('interactive', false)
        } else {
          const t = Math.min(1, depth)
          const scale = 0.4 + 0.6 * t
          const opacity = 0.4 + 0.6 * t
          sprite.set('scale', scale)
          sprite.set('opacity', opacity)
          sprite.set('interactive', true)
        }
      })
    }

    // Initial positioning before the first frame
    updateBullets(0)

    let rotation = 0
    let rafId: number
    function rotate() {
      rotation -= 0.06
      chart.set('rotationX', rotation)
      updateBullets(rotation)
      rafId = requestAnimationFrame(rotate)
    }
    rafId = requestAnimationFrame(rotate)

    return () => {
      cancelAnimationFrame(rafId)
      root.dispose()
    }
  }, [])

  return <div ref={chartDivRef} className="h-full w-full" />
}
