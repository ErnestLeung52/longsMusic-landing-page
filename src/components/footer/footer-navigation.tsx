import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'

const courseMenu: Array<Navigation> = [
  {
    label: 'Intro to Guitar Lesson',
    path: '#',
  },
  {
    label: 'Mixing and Mastering Acoustic Guitar',
    path: '#',
  },
  {
    label: 'Intro to DJ Lesson',
    path: '#',
  },
  {
    label: 'Tab & Sheet Arrangement',
    path: '#',
  },
]

const pageMenu = headerNavigations

// const companyMenu: Array<Navigation> = [
//   { label: 'Contact Us', path: '#' },
//   { label: 'Privacy & Policy', path: '#' },
//   { label: 'Term & Condition', path: '#' },
//   { label: 'FAQ', path: '#' },
// ]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={6} md={6}>
        <FooterSectionTitle title="Course" />
        {courseMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={/* path */ '#'} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      {/* <Grid item xs={12} md={4}>
        <FooterSectionTitle title="About" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid> */}
    </Grid>
  )
}

export default FooterNavigation
