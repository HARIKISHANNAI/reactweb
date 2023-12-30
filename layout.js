import './globals.css'
import Navbar from "./Navbar/Page"

export default function RootLayout({children}){
  return(
    <html lang="en">
      <body>
        <Navbar/> {children}
      </body>
    </html>
  )
}
