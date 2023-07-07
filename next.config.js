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
                source:`/page/:lang/:url*`,
                destination:'/page?lang=:lang&url=:url*',
                

            }
        ]
    }
    

}

module.exports = nextConfig
