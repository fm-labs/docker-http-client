import React from 'react'
import api from '../../../lib/api.ts'
import DashboardResourcesWidget from './DashboardResourcesWidget.tsx'
import KeyValueGrid from '../../../elements/KeyValueGrid.tsx'
import { Paper } from '@mui/material'
import AppIcons from '../../../elements/AppIcons.tsx'
import JsonView from '../../../elements/JsonView.tsx'

const DashboardEngineInfoWidget = () => {
  const [engineInfo, setEngineInfo] = React.useState<any>(null)

  const kvInfo = React.useMemo(() => {
    if (!engineInfo) return []

    return Object.entries(engineInfo)
      .filter((entry) => typeof entry[1] !== 'object' && Array.isArray(entry[1]) === false)
      .map((entry) => {
        return {
          key: entry[0],
          value: engineInfo[entry[0]],
        }
      })
  }, [engineInfo])

  const fetchEngineInfo = React.useCallback(() => {
    api
      .getEngineInfo()()
      .then((data) => {
        console.log('data', data)
        setEngineInfo(data)
      })
  }, [])

  React.useEffect(() => {
    fetchEngineInfo()
  }, [])

  return (
    <div>
      <h5>
        <AppIcons.EnvironmentIcon /> Summary
      </h5>
      {engineInfo && <DashboardResourcesWidget engineInfo={engineInfo} />}

      <h5>
        <AppIcons.DockerIcon /> Engine Info
      </h5>
      <Paper sx={{ padding: 2 }}>
        <KeyValueGrid data={kvInfo} />
        {/*<KeyValueTable data={kvInfo} />*/}
      </Paper>

      <h5>
        <AppIcons.BugIcon /> Engine Details
      </h5>
      <Paper sx={{ padding: 2 }}>{engineInfo ? <JsonView src={engineInfo} /> : <div>Loading...</div>}</Paper>
    </div>
  )
}

export default DashboardEngineInfoWidget
