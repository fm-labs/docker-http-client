import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'
import { AppBar } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import RoutedTabs, { RoutedTabItem } from '../../../elements/RoutedTabs.tsx'
import StackFromScratch from './StackFromScratch.tsx'
import StackFromGit from './StackFromGit.tsx'
import StackFromUrl from './StackFromUrl.tsx'
import StackFromPortainerTemplate from './StackFromPortainerTemplate.tsx'
import api from '../../../lib/api.ts'
import { toast } from 'react-toastify'
import StackFromTemplate from './StackFromTemplate.tsx'

export default function CreateStacksDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const onSubmit = (formData: FormData) => {
    console.log('Create stack SUBMIT', formData)

    console.log(formData)
    api
      .createStack()(formData)
      .then((response) => {
        console.log(response)
        toast.success('Stack successfully created')
      })
      .catch((error) => {
        console.error('error creating stack', error)
        toast.error('Error creating stack')
      })
  }

  const tabs: RoutedTabItem[] = [
    {
      label: 'From Template',
      name: 'stack-from-template',
      children: <StackFromTemplate />,
    },
    {
      label: 'From Git repository',
      name: 'stack-from-git',
      children: <StackFromGit />,
    },
    // {
    //   label: 'From URL',
    //   name: 'stack-from-url',
    //   children: <StackFromUrl />,
    // },
    // {
    //   label: 'From Wizzard',
    //   name: 'stack-from-wizzard',
    //   children: <StackFromWizzard />,
    // },
    {
      label: 'From Scratch',
      name: 'stack-from-scratch',
      children: <StackFromScratch />,
    },
    {
      label: 'From Portainer',
      name: 'stack-from-portainer',
      children: <StackFromPortainerTemplate />,
    },
  ]

  return (
    <React.Fragment>
      <Dialog open={open} onClose={onClose} fullScreen={true}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
              Launch new compose stack
            </Typography>
            {/*<Button autoFocus color='inherit' onClick={onClose}>
              save
            </Button>*/}
            <IconButton edge='start' color='inherit' onClick={onClose} aria-label='close'>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        <DialogContent>
          <RoutedTabs items={tabs} />
        </DialogContent>
        {/*<DialogActions>
          <Button onClick={onClose} variant={'contained'} color={'error'}>
            Cancel
          </Button>
          <Button type='submit' variant={'contained'} color={'primary'}>
            Launch
          </Button>
        </DialogActions>*/}
      </Dialog>
    </React.Fragment>
  )
}
