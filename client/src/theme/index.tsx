import {ConfigProvider} from "antd"

const ThemeProvider = ({children}:{
  children:React.ReactNode
}) => {
  return (
  <ConfigProvider theme={{
    token:{
colorPrimary:"rgb(34,40,49)",
borderRadius:2
    },
    components:{
      Button:{
        controlHeight:45,
        controlOutline:"none"
      },
      Input:{
        controlHeight:45,
        controlOutline:"none"
      }
    }
  }}>{children}</ConfigProvider>
  )
}

export default ThemeProvider