import type { NextPage } from 'next'
import SafeEnvironment from '@components/feedback/SafeEnvironment'
import PageTitle from '@components/data-display/PageTitle'
import UserInformation from '@components/data-display/UserInformation'
import TextFieldMask from '@components/inputs/TextFieldMask'
import { Button, CircularProgress, Container, Typography } from '@mui/material'
import { FormElementsContainer, ProfissionalContainer, ProfissionalPaper } from '@styles/pages/index.style'
import { useState } from 'react'
import useIndex from 'data/hooks/pages/useIndex.page'
import { UserShortInterface } from 'data/@types/UserInterface'

const Home: NextPage = () => {
  const {zipCode, setZipCode, zipCodeValid,
    searchDayLaborers,
    error,
    dayLaborers,
    dayLaborersRemaining,
    loading,
    searchDone
  } = useIndex();

  return (
    <div>
      <SafeEnvironment></SafeEnvironment>
      <PageTitle 
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            variant={'outlined'}
            value={zipCode}
            onChange={({target}) => setZipCode(target.value)}
          />
          {error && <Typography color={'error'}>{error}</Typography>}
          <Button 
            variant={'contained'} 
            color={'secondary'} 
            sx={{ width: '220px' }}
            disabled={!zipCodeValid || loading}
            onClick={() => searchDayLaborers(zipCode)}
          >
            {loading ? <CircularProgress size={20}/> : 'Buscar'}
          </Button>
        </FormElementsContainer>

        {searchDone && (dayLaborers.length > 0 ? (
          <ProfissionalPaper>
            <ProfissionalContainer>
              {dayLaborers.map((value: UserShortInterface, index: number) => {
                return (
                  <UserInformation
                    key={index}
                    name={value.nome_completo}
                    picture={value.foto_usuario}
                    rating={value.reputacao}
                    description={value.cidade}
                  ></UserInformation>
                );
              })}
            </ProfissionalContainer>

            {dayLaborersRemaining > 0 &&
              <Container sx={{ textAlign: 'center' }}>
                <Typography sx={{mt: 5}}>
                  ...e mais {dayLaborersRemaining} {dayLaborersRemaining > 1 ? 'profissionais atendem' : 'profissional atende'} ao seu endereço.
                </Typography>
                <Button
                  variant={'contained'}
                  color={'secondary'}
                  sx={{ mt: 5 }}
                >
                  Contratar um profissional
                </Button>
              </Container>
            }
          </ProfissionalPaper>
        ) : (
          <Typography align={'center'} color={'textPrimary'}>
            Ainda não temos nenhuma diarista disponível em sua região 
          </Typography>
        ))}
      </Container>

    </div>
  )
}
export default Home
