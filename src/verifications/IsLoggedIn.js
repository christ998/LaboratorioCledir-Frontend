export default function IsLoggedInAsAdmin({children}) {

   if (!localStorage.getItem('token')){
       return <></>
   }

   return children

}