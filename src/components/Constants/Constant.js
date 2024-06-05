export const APIKey = process.env.REACT_APP_API_URL;
export const update = "/update"



export function checkemailValidOrNot(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email)) {
    return true;
  } else {
    return false;
  }
}

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

