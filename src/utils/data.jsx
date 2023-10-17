import { AiOutlineDollarCircle,  AiOutlineArrowUp,AiOutlineProfile } from 'react-icons/ai'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { RiShoppingBasketLine } from 'react-icons/ri'


export const cardItems = [
    {
        icon: <AiOutlineDollarCircle style={{backgroundColor:"rgba(0, 255, 26, 0.3)", color:"#25ea25", borderRadius:"50%", padding:'5px'}}/>,
        title: "Earning",
        price: "$198K",
        statusIcon: <AiOutlineArrowUp/>,
        status: "37.8%",
        time:"this month"
    },
    {
        icon: <AiOutlineProfile style={{backgroundColor:"rgba(221, 0, 255, 0.3)", color:"#a20fa4", borderRadius:"50%", padding:'5px'}}/>,
        title: "Orders",
        price: "$2.4K",
        statusIcon: <AiOutlineArrowUp/>,
        status: "2%",
        time:"this month"
    },
    {
        icon: <MdOutlineAccountBalanceWallet style={{backgroundColor:"rgba(0, 115, 255, 0.3)", color:"#0f28a4", borderRadius:"50%", padding:'5px'}}/>,
        title: "Balance",
        price: "$2.4K",
        statusIcon: <AiOutlineArrowUp/>,
        status: "2%",
        time:"this month"
    },
    {
        icon: <RiShoppingBasketLine style={{backgroundColor:"rgba(232, 12, 12, 0.618)", color:"#a40f0f", borderRadius:"50%", padding:'5px'}}/>,
        title: "Total Sales",
        price: "$89K",
        statusIcon: <AiOutlineArrowUp/>,
        status: "11% ",
        time:"this week"
    }
]
