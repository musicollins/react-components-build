import { useEffect, useState } from "react";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

function useRequestDelay(initialData, delayTime = 1000) {
  const [data, setData] = useState(initialData);
  const [ requestStatus, setRequestStatus ] = useState(REQUEST_STATUS.LOADING)
  const [error, setError] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function delayFunc() {
      try {
        await delay(delayTime);
        // setIsLoading(false);
        setRequestStatus(REQUEST_STATUS.SUCCESS)
        console.log(data)
        setData(data);
      } catch (e) {
        // setIsLoading(false);
        // setHasErrored(true);
        setRequestStatus(REQUEST_STATUS.FAILURE)
        setError(e.message);
      }
    }

    delayFunc();
  }, []);

  //Updates the state of the whole list
  //After the "favorite" icon is toggled
  const handleClickFavorite = (id) => {
    const speakerToBeUpdated = data.find(
      (speaker) => speaker.id === id
    );

    const updatedSpeaker = {
      ...speakerToBeUpdated,
      favorite: !speakerToBeUpdated.favorite,
    };

    const updatedData = data.map((speaker) => {
      return speaker.id === id ? updatedSpeaker : speaker;
    });

    setData(updatedData);
  };

  const updateRecord = (updatedRecord, doneCallBack) => {

    const updatedData = data.map((speaker) => {
      return speaker.id === updatedRecord.id ? updatedRecord : speaker;
    });

    const delayFunc = async () =>{
      try {
        await delay(2000)
        setData(updatedData)
        doneCallBack()
      } catch (error) {
        console.error("There's been a server ERROR!")
        setError(error.message)
      }
    }
    delayFunc()

  };

  return {
    data,
    // isLoading,
    // hasErrored,
    requestStatus,
    error,
    updateRecord
    // handleClickFavorite,
  };
}

export default useRequestDelay;
