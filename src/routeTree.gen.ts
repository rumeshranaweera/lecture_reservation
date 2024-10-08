/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as dashboardLayoutImport } from './routes/(dashboard)/_layout'
import { Route as dashboardPathsLecturehallsImport } from './routes/(dashboard)/_paths/lecturehalls'
import { Route as dashboardPathsLabhallsImport } from './routes/(dashboard)/_paths/labhalls'
import { Route as dashboardPathsHomeImport } from './routes/(dashboard)/_paths/home'
import { Route as dashboardPathsExamImport } from './routes/(dashboard)/_paths/exam'
import { Route as dashboardPathsDashboardImport } from './routes/(dashboard)/_paths/dashboard'

// Create Virtual Routes

const dashboardImport = createFileRoute('/(dashboard)')()
const TestLazyImport = createFileRoute('/test')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const dashboardRoute = dashboardImport.update({
  id: '/(dashboard)',
  getParentRoute: () => rootRoute,
} as any)

const TestLazyRoute = TestLazyImport.update({
  path: '/test',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/test.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const dashboardLayoutRoute = dashboardLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => dashboardRoute,
} as any)

const dashboardPathsLecturehallsRoute = dashboardPathsLecturehallsImport.update(
  {
    path: '/lecturehalls',
    getParentRoute: () => dashboardRoute,
  } as any,
)

const dashboardPathsLabhallsRoute = dashboardPathsLabhallsImport.update({
  path: '/labhalls',
  getParentRoute: () => dashboardRoute,
} as any)

const dashboardPathsHomeRoute = dashboardPathsHomeImport.update({
  path: '/home',
  getParentRoute: () => dashboardRoute,
} as any)

const dashboardPathsExamRoute = dashboardPathsExamImport.update({
  path: '/exam',
  getParentRoute: () => dashboardRoute,
} as any)

const dashboardPathsDashboardRoute = dashboardPathsDashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => dashboardRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/test': {
      id: '/test'
      path: '/test'
      fullPath: '/test'
      preLoaderRoute: typeof TestLazyImport
      parentRoute: typeof rootRoute
    }
    '/(dashboard)': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof dashboardImport
      parentRoute: typeof rootRoute
    }
    '/(dashboard)/_layout': {
      id: '/_layout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof dashboardLayoutImport
      parentRoute: typeof dashboardRoute
    }
    '/(dashboard)/_paths/dashboard': {
      id: '/_paths/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof dashboardPathsDashboardImport
      parentRoute: typeof dashboardImport
    }
    '/(dashboard)/_paths/exam': {
      id: '/_paths/exam'
      path: '/exam'
      fullPath: '/exam'
      preLoaderRoute: typeof dashboardPathsExamImport
      parentRoute: typeof dashboardImport
    }
    '/(dashboard)/_paths/home': {
      id: '/_paths/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof dashboardPathsHomeImport
      parentRoute: typeof dashboardImport
    }
    '/(dashboard)/_paths/labhalls': {
      id: '/_paths/labhalls'
      path: '/labhalls'
      fullPath: '/labhalls'
      preLoaderRoute: typeof dashboardPathsLabhallsImport
      parentRoute: typeof dashboardImport
    }
    '/(dashboard)/_paths/lecturehalls': {
      id: '/_paths/lecturehalls'
      path: '/lecturehalls'
      fullPath: '/lecturehalls'
      preLoaderRoute: typeof dashboardPathsLecturehallsImport
      parentRoute: typeof dashboardImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  AboutLazyRoute,
  TestLazyRoute,
  dashboardRoute: dashboardRoute.addChildren({
    dashboardPathsDashboardRoute,
    dashboardPathsExamRoute,
    dashboardPathsHomeRoute,
    dashboardPathsLabhallsRoute,
    dashboardPathsLecturehallsRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/about",
        "/test",
        "/"
      ]
    },
    "/": {
      "filePath": "(dashboard)",
      "children": [
        "/_layout",
        "/_paths/dashboard",
        "/_paths/exam",
        "/_paths/home",
        "/_paths/labhalls",
        "/_paths/lecturehalls"
      ]
    },
    "/about": {
      "filePath": "about.lazy.jsx"
    },
    "/test": {
      "filePath": "test.lazy.jsx"
    },
    "/_layout": {
      "filePath": "(dashboard)/_layout.jsx",
      "parent": "/"
    },
    "/_paths/dashboard": {
      "filePath": "(dashboard)/_paths/dashboard.jsx",
      "parent": "/"
    },
    "/_paths/exam": {
      "filePath": "(dashboard)/_paths/exam.jsx",
      "parent": "/"
    },
    "/_paths/home": {
      "filePath": "(dashboard)/_paths/home.jsx",
      "parent": "/"
    },
    "/_paths/labhalls": {
      "filePath": "(dashboard)/_paths/labhalls.jsx",
      "parent": "/"
    },
    "/_paths/lecturehalls": {
      "filePath": "(dashboard)/_paths/lecturehalls.jsx",
      "parent": "/"
    }
  }
}
ROUTE_MANIFEST_END */
