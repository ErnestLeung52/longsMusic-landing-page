import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Easy Accessable',
    description: 'Learn guitar, DJ, and access tabs and sheets conveniently from anywhere',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'More Affordable Cost',
    description: 'Save money compared to traditional lessons and physical sheet music.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Flexible Time',
    description: 'Learn at your own pace and schedule, fitting lessons into your busy life',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Consultation With Mentor',
    description: 'Get personalized guidance and feedback from experienced mentors',
    icon: <ContactSupportIcon />,
  },
]
