import { PageContainer, Left, Center, MainContainer } from '../../components/page/commonPage'
import MenuTab from '../../components/tab/MenuTab'
import SubTab from '../../components/tab/SubTab'
import HeadTab from '../../components/tab/HeadTab'


const NoticeHome = () => {

    return (
        <PageContainer>
            <Left>
                <MenuTab activeMenu='notice' />
            </Left>
            <Center>
                <HeadTab />
                <MainContainer>
                    <div>noticeHome</div>

                </MainContainer>
            </Center>
        </PageContainer>
    )
}

export default NoticeHome