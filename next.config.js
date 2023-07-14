/** @type {import('next').NextConfig} */
const nextConfig = {
     modularizeImports:{
        '@mui/material':{
            transform:'@mui/material/{{member}}'
        },
        '@mui/icons-material':{
            transform:'@mui/icons-material/{{member}}'
        },
        'antd':{
            transform:'antd/es/{{kebabCase member}}'
        }
        , 
        '@ant-design/icons':{
            transform:'@ant-design/icons/{{member}}'
        }


    },
    async rewrites(){
        return[
        
            {
                source:`/:lang(en|ar)/:url*`,
                destination:'/:lang?url=:url*',
                

            }
        ]
    }
    

}

module.exports = nextConfig
