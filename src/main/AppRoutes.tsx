/* eslint-disable @typescript-eslint/no-shadow */
import { Routes, Route, Navigate } from 'react-router-dom'
import ProgrammingNotes from 'main/screen/ProgrammingNotes'

export enum RoutingPath {
  Home = '/',
  Ppm = '/ppm',
  ProgrammingNotes = '/ppm/programming-notes',
  ShoeConfigurator = '/ppm/shoe-configurator',
}

function AppRoutes() {
  return (
    <Routes>
      <Route
        path={RoutingPath.Home}
        element={<Navigate replace to={RoutingPath.Ppm} />}
      />
      <Route
        path={RoutingPath.Ppm}
        element={<Navigate replace to={RoutingPath.ProgrammingNotes} />}
      />
      <Route
        path={RoutingPath.ProgrammingNotes}
        element={<ProgrammingNotes />}
      />
      <Route path={RoutingPath.ShoeConfigurator} element={<div />} />
    </Routes>
  )
}

export default AppRoutes
