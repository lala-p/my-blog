import { PageContainer, Left, Center, MainContainer } from '../../components/page/commonPage'
import MenuTab from '../../components/tab/MenuTab'
import SubTab from '../../components/tab/SubTab'
import HeadTab from '../../components/tab/HeadTab'


export async function getServerSideProps({ query: { noticeNo } }) {
    return {
        props: {
            noticeNo,
        },
    }
}

const NoticeDetail = props => {

    const noticeNo = props.noticeNo

    return (
        <PageContainer>
            <Left>
                <MenuTab activeMenu='notice' />
            </Left>
            <Center>
                <HeadTab />
                <MainContainer>
                    <div>notice</div>

                </MainContainer>
            </Center>
        </PageContainer>
    )
}

export default NoticeDetail