const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostDate() {
  const res = await fetch(new URL(apiUrl)); //データを取得
  const posts = await res.json(); //json形式に変換
  return posts //returnで返す
}

// idを取得する関数
export async function getAllPostIds () {
  const res = await fetch(new URL(apiUrl));
  const posts = await res.json()
  return posts.map((post) => { //map処理で展開
    return{ //最終的に返す値
      params: {
        id: String(post.id)
      }
    }
  })
}

// 取得したidからURLを取得する関数
export async function getPostDate(id) {
  const res = await fetch(new URL(`${apiUrl}/${id}`))
  const post = await res.json()

  return post;
}
