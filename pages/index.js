import { PageContainer, Left, Center, MainContainer } from '../../components/page/commonPage'
import MenuTab from '../../components/tab/MenuTab'
import SubTab from '../../components/tab/SubTab'
import HeadTab from '../../components/tab/HeadTab'


const Home = () => {

        
    return (
        <PageContainer>
            <Left>
                <MenuTab activeMenu='home' />
            </Left>
            <Center>
                <HeadTab />
                <MainContainer>
                    <div>home</div>

                </MainContainer>
            </Center>
        </PageContainer>
    )
}

export default Home