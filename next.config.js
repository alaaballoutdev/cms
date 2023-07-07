/** @type {import('next').NextConfig} */
const nextConfig = {
     modularizeImports:{
        '@mui/material':{
            transform:'@mui/material/{{member}}'
        },
        '@mui/icons-material':{
            transform:'@mui/icons-material/{{member}}'
        }

    },
    async rewrites(){
        return[
        
            {
                source:`/test/:lang/:url*`,
                destination:'/test?lang=:lang&url=:url*',
                

            }
        ]
    }
    

}

module.exports = nextConfig
