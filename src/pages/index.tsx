import type { NextPage } from 'next'
import SafeEnvironment from '@components/feedback/SafeEnvironment'
import PageTitle from '@components/data-display/PageTitle'
import UserInformation from '@components/data-display/UserInformation'

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment></SafeEnvironment>
      <PageTitle 
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />
      <UserInformation
        name={'João Victor'}
        picture={'https://github.com/JVVeiga.png'}
        rating={3}
        description={'Barretos/SP'}
      ></UserInformation>
    </div>
  )
}
export default Home
