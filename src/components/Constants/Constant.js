export const APIKey = process.env.REACT_APP_API_URL;


export const fetchData = async () => {


  // try {
  //   fetch(`${APIKey}/GetUsers`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data.User[1].firstname);
  //       //  setPhotos(data);
  //       return data
        
  //     });
  // } catch {
  //   console.log("API Failed");
  // }
  try {
  const res = await fetch(`${APIKey}/GetUsers`)
  const json = await res.json()
  return json
  } catch {
    return "Erroor"
  }
  // console.log(json)
  
}

