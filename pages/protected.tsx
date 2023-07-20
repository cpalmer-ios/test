import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Layout from "../components/layout"
import AccessDenied from "../components/access-denied"
import Table from "../components/Table"
import SearchBar from "../components/SearchBar"
import { useRouter } from "next/router"

export default function ProtectedPage() {
  const { data: session } = useSession()
  const [content, setContent] = useState()
  const [data, setData] = useState<any[]>([])

  const fetchData = async () => {
    const res = await fetch("/api/odds/protected")
    const json = await res.json()
    if (json.content) {
      setContent(json.content)
    }
    if(json.data) {
      setData(json.data)
    }
  }


  const handleSearch = (e: string) => {

    console.log(e)

    
    let prevSearch = localStorage.getItem('search-term')
    
    if (prevSearch === e) {
      localStorage.removeItem('search-term');
      fetchData()
    }
    
    
    if(e === '' ) {
      fetchData()
    }
    
    const res = data.filter(name => name.competition.includes(e))
    setData(res)
    localStorage.setItem('search-term', e)
  }

  // Fetch content from protected route
  useEffect(() => {
    fetchData()
  }, [session])
  
  
  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    )
  }
  
  // If session exists, display content
  return (
    <Layout>
      <SearchBar onSubmit={(e) => handleSearch(e)} inputProps={{ "aria-label": "competition-search" }}/>
      <h1>Protected Odds Page</h1>
        <strong>{content ?? "\u00a0"}</strong>
      <Table data={data} />
    </Layout>
  )
}
