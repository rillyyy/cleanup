import axios from "axios";

export const postDiary = async () => {
  const obj = {
    loginedUserId: 3,
    title: "string",
    content: "string",
    pics: ["arr1", "arr2"],
  };
  try {
    const res = await axios.post(`api/diary`, obj);
    console.log(res.data);
    console.log("전송성공");
  } catch (error) {
    console.log(error);
  }
};

export const patchDiary = async () => {
  const obj = {
    diaryId: 0,
    title: "string",
    contents: "string",
    pics: ["",""],
  };
  try {
    const res = await axios.patch(`api/diary`, obj);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
