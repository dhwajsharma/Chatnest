import { Add, Create, ExpandMore, FiberManualRecord } from '@material-ui/icons'
import { useCollection } from 'react-firebase-hooks/firestore'
import styled from 'styled-components'
import { db } from '../firebase'
import SidebarOption from './SidebarOption'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../firebase';

const Sidebar = () => {
    const [channels, loading, error] = useCollection(db.collection("rooms"))
    const [user] = useAuthState(auth);

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Chat App</h2>
                    <h3>
                        <FiberManualRecord />
                        {user.displayName}
                    </h3>
                </SidebarInfo>
                <Create />
            </SidebarHeader>

            <hr />
            <SidebarOption Icon={Add} addChannelOption title="Add Channel" />

            {channels?.docs.map(doc => (
                <SidebarOption
                    key={doc.id}
                    id={doc.id}
                    title={doc.data().name}
                />

            ))}

        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    background-color: #161616;
    color: white;
    flex: 0.3;
    border-top: 1px solid #161616;
    max-width: 260px;
    margin-top: 60px;

    >hr{
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #161616;
    }
`

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #161616;
    padding: 13px;

    > .MuiSvgIcon-root{
        padding: 8px;
        color: #242424;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
}
`

const SidebarInfo = styled.div`
    flex: 1;

    > h2{
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3{
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root{   
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
        cursor: pointer;
    }

`