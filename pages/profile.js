import { PageContainer, Left, Center, MainContainer } from '../../components/page/commonPage'
import MenuTab from '../../components/tab/MenuTab'
import SubTab from '../../components/tab/SubTab'
import HeadTab from '../../components/tab/HeadTab'


const Profile = () => {


    return (
        <PageContainer>
            <Left>
                <MenuTab activeMenu='profile' />
            </Left>
            <Center>
                <HeadTab />
                <MainContainer>
                    <div>profile</div>

                </MainContainer>
            </Center>
        </PageContainer>
    )

}


export default Profile