const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
  
    

      getMessage: async () => {
        try {
        
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
   

      login: async (email, password) => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
            headers: {
              "Content Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });
          const data = await resp.json();
          setStore({
            token: data.token,
            user: data.user,
          });
          if (data.status == 200) {
            return true;
          }
          return false;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
    },
  };
};

export default getState;
