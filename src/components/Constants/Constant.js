export const APIKey = process.env.REACT_APP_API_URL;
export const update = "/update";
export const Getuserlist = "/GetUsers";
export const DeleteUserData = "/delete";

export function checkemailValidOrNot(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email)) {
    return true;
  } else {
    return false;
  }
}

export async function Network(endPoint) {
  try {
    const res = await fetch(`${APIKey}${endPoint}`);
    const json = await res.json();
    // console.log(json)
    return json;
  } catch {
    return "Erroor";
  }
}

export async function NetworkDelete(endPoint) {
  // alert(endPoint)
  try {
    const res = await fetch(`${APIKey}${endPoint}`);
    const json = await res.json();
    // console.log(json)
    return json;
  } catch {
    return "Erroor";
  }
}

export const Getuserdata = async () => {
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

  const res = Network(`${Getuserlist}`);
  return res;

  // try {
  // const res = await fetch(`${APIKey}${Getuserlist}`)
  // const json = await res.json()
  // // console.log(json)
  // return json
  // } catch {
  //   return "Erroor"
  // }

  // console.log(json)
};

export const Deleteuserdata = async (id) => {
  alert(`The data id is : ${id}`);
  // const res = NetworkDelete(`${DeleteUserData}/${id}`)
  // return res


   // let data = { name, email, mobile };
    // console.warn(data);
    fetch(`${APIKey}${DeleteUserData}/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    }).then((resp) => {
      // console.warn("resp",resp);;
      resp.json().then((result) => {
        console.warn("result", result);
      });
    });
  
};
