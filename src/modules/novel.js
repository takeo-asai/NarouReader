type Attributes = {
  bigGenre: number,
  genre: number,
  isShort: boolean,
  isEnd: boolean,
  isR15: boolean,
  isBoysLove: boolean,
  isGirlsLove: boolean,
  isViolence: boolean,
  isReincarnation: boolean,
  isWarp: boolean,
};

export default class Novel {
  static fetch(date: Date) {
    const month = `00${date.getMonth() + 1}`.slice(-2);
    const day = `00${date.getDate()}`.slice(-2);
    const rtype = `${date.getFullYear()}${month}${day}`;
    const rankingApi = `https://api.syosetu.com/rank/rankget/?rtype=${rtype}-d&out=json`;
    return fetch(rankingApi)
      .then(response => response.json())
      .then(json => json.map(novel => novel.ncode))
      .then((ncodes: [string]) => {
        const ncodesStr = ncodes.join('-');
        // 21件までしか同時に小説情報は取れない
        console.log('NCODES', ncodesStr);
        const novelsApi = `https://api.syosetu.com/novelapi/api/?ncode=${ncodesStr}&out=json`;
        return fetch(novelsApi)
          .then(response => response.json())
          .then(json =>
            json.map(novel =>
              // keywords, stories, updated_at, attributes は直す
              new Novel(
                novel.ncode,
                novel.title,
                novel.writer,
                novel.keywords,
                novel.length,
                novel.stories,
                novel.updated_at,
                novel.attributes,
              )));
      })
      .catch((error) => {
        // TODO: エラー処理
        console.log(error);
      });
  }

  ncode: string;
  title: string;
  writer: string;
  keywords: [string];
  length: number;
  stories: number;
  updatedAt: Date;
  attributes: Attributes;
  constructor(
    ncode: string,
    title: string,
    writer: string,
    keywords: [string],
    length: number,
    stories: number,
    updatedAt: Date,
    attributes: Attributes,
  ) {
    this.ncode = ncode;
    this.title = title;
    this.writer = writer;
    this.keywords = keywords;
    this.length = length;
    this.stories = stories;
    this.updatedAt = updatedAt;
    this.attributes = attributes;
  }
}
