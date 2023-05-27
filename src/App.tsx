import { Box, Icon, IconButton, Slider, Typography } from '@mui/material'
import React from 'react'
import './App.css'

type Player = {
  player1: number
  player2: number
}

type Scores = {} & Player

type ActionOnScore = {} & Player

const App = () => {
  const [scores, setScores] = React.useState<Scores>({ player1: 50, player2: 50 })

  const [actionOnScore, setActionOnScore] = React.useState<ActionOnScore>({ player1: 0, player2: 0 })

  const handleScores = (key: keyof Player, value: number) => {
    setScores((prev) => ({ ...prev, [key]: value }))
  }

  const handleAddScore = (key: keyof Player, value: number) => {
    setScores((prev) => ({ ...prev, [key]: prev[key] + value }))
  }

  const handleRemoveScore = (key: keyof Player, value: number) => {
    setScores((prev) => ({ ...prev, [key]: prev[key] - value }))
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          flex: 1,
          backgroundColor: 'red',
          py: 1,
          px: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                width: '300px',
              }}
            >
              <Slider
                value={scores.player1}
                onChange={(event: Event, newValue: number | number[]) => {
                  handleScores('player1', newValue as number)
                }}
                min={0}
                max={100}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <IconButton
              sx={{
                backgroundColor: 'white',
                borderRadius: '100%',
                height: '50px',
              }}
              onClick={() => {
                handleRemoveScore('player1', 1)
              }}
              disabled={scores.player1 === 0}
            >
              <Icon>remove</Icon>
            </IconButton>
            <Typography variant="h1">{scores.player1}</Typography>
            <IconButton
              sx={{
                backgroundColor: 'white',
                borderRadius: '100%',
                height: '50px',
              }}
              onClick={() => {
                handleAddScore('player1', 1)
              }}
            >
              <Icon>add</Icon>
            </IconButton>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <IconButton
              sx={{
                backgroundColor: 'white',
                borderRadius: '100%',
                height: '50px',
              }}
              onClick={() => {
                handleRemoveScore('player1', actionOnScore.player1)
              }}
              disabled={scores.player1 === 0}
            >
              <Icon>remove</Icon>
            </IconButton>
            <Box
              sx={{
                width: '300px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant="h3">{actionOnScore.player1}</Typography>
              <Slider
                max={100}
                value={actionOnScore.player1}
                onChange={(event: Event, newValue: number | number[]) => {
                  setActionOnScore((prev) => ({ ...prev, player1: newValue as number }))
                }}
                min={0}
              />
            </Box>
            <IconButton
              sx={{
                backgroundColor: 'white',
                borderRadius: '100%',
                height: '50px',
              }}
              onClick={() => {
                handleAddScore('player1', actionOnScore.player1)
              }}
            >
              <Icon>add</Icon>
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          flex: 1,
          backgroundColor: 'blue',
          py: 1,
          px: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
            px: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                width: '300px',
              }}
            >
              <Slider
                max={100}
                value={scores.player2}
                onChange={(event: Event, newValue: number | number[]) => {
                  handleScores('player2', newValue as number)
                }}
                min={0}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <IconButton
              sx={{
                backgroundColor: 'white',
                borderRadius: '100%',
                height: '50px',
              }}
              onClick={() => {
                handleRemoveScore('player2', 1)
              }}
              disabled={scores.player2 === 0}
            >
              <Icon>remove</Icon>
            </IconButton>
            <Typography variant="h1">{scores.player2}</Typography>
            <IconButton
              sx={{
                backgroundColor: 'white',
                borderRadius: '100%',
                height: '50px',
              }}
              onClick={() => {
                handleAddScore('player2', 1)
              }}
            >
              <Icon>add</Icon>
            </IconButton>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <IconButton
              sx={{
                backgroundColor: 'white',
                borderRadius: '100%',
                height: '50px',
              }}
              onClick={() => {
                handleRemoveScore('player2', actionOnScore.player2)
              }}
              disabled={scores.player2 === 0}
            >
              <Icon>remove</Icon>
            </IconButton>
            <Box
              sx={{
                width: '300px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              px={1}
            >
              <Typography variant="h3">{actionOnScore.player2}</Typography>
              <Slider
                max={100}
                value={actionOnScore.player2}
                onChange={(event: Event, newValue: number | number[]) => {
                  setActionOnScore((prev) => ({ ...prev, player2: newValue as number }))
                }}
                min={0}
              />
            </Box>
            <IconButton
              sx={{
                backgroundColor: 'white',
                borderRadius: '100%',
                height: '50px',
              }}
              onClick={() => {
                handleAddScore('player2', actionOnScore.player2)
              }}
            >
              <Icon>add</Icon>
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default App
