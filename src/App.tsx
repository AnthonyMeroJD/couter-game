import { Box, Icon, IconButton, TextField, Typography } from '@mui/material'
import './App.css'
import React from 'react'

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
        height: '90vh',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          flex: 1,
          backgroundColor: 'red',
          py: 1,
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
            <Box>
              <TextField
                label={'Vida inicial'}
                size="small"
                onChange={(e) => {
                  handleScores('player1', Number(e.target.value))
                }}
                value={scores.player1}
                type="number"
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
            <TextField
              label={'Valor'}
              size="small"
              value={actionOnScore.player1}
              onChange={(e) => {
                setActionOnScore((prev) => ({ ...prev, player1: Number(e.target.value) }))
              }}
              type="number"
            />
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
            <Box>
              <TextField label={'Vida inicial'} size="small" value={scores.player2} type="number" />
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
            <TextField
              label={'Valor'}
              size="small"
              value={actionOnScore.player2}
              onChange={(e) => {
                setActionOnScore((prev) => ({ ...prev, player2: Number(e.target.value) }))
              }}
              type="number"
            />
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
