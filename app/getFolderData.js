import FoldersPage from "./components/FoldersPage";
export const getStaticProps = async ()=>
{
    const response = await fetch("https://dev.test.sega.co.uk/api/list",{
     method: "GET",
     mode: "cors",
    headers:{
        "Content-type": "application/json",
        "x-secret-api-key": "fcAJwqSI1loSEdpOgaOI6qLpWPV9dGJe",
        "Access-Control-Allow-Origin": "http://localhost:3000/"
    }
    });
    const data=await response.text();
    console.log(data);
    return{
        props: {folderData:data}
    }
}
const Home=({folderData})=>{
console.log(folderData);
return(
    <>
 
    </>
)
}
