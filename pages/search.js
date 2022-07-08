import { PageContainer, Left, Center, MainContainer } from '../components/page/commonPage'
import MenuTab from '../components/tab/MenuTab'
import SubTab from '../components/tab/SubTab'
import HeadTab from '../components/tab/HeadTab'


const Search = () => {

    return (
        <PageContainer>
            <Left>
                <MenuTab activeMenu='search' />
            </Left>
            <Center>
                <HeadTab />
                <MainContainer>
                    <div>search</div>

                </MainContainer>
            </Center>
        </PageContainer>
    )

}


export default Search