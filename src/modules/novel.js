export type NovelAttributes = {
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

export type NovelType = {
  ncode: string,
  title: string,
  description: string,
  writer: string,
  keywords: [string],
  length: number,
  stories: number,
  updatedAt: Date,
  attributes: NovelAttributes,
};

export default class Novel implements NovelType {
  static fetch(date: Date) {
    const month = `00${date.getMonth() + 1}`.slice(-2);
    const day = `00${date.getDate()}`.slice(-2);
    const rtype = `${date.getFullYear()}${month}${day}`;
    const rankingApi = `https://api.syosetu.com/rank/rankget/?rtype=${rtype}-d&out=json`;
    return (
      fetch(rankingApi)
        .then(response => response.json())
        // 21件までしか同時に小説情報は取れない
        .then(json => json.filter(novel => novel.rank <= 20))
        .then(json => json.map(novel => novel.ncode))
        .then((ncodes: [string]) => {
          const ncodesStr = ncodes.join('-');
          const novelsApi = `https://api.syosetu.com/novelapi/api/?ncode=${ncodesStr}&out=json`;
          console.log('API: ', novelsApi);
          return fetch(novelsApi)
            .then(response => response.json())
            .then(json => json.filter(novel => novel.ncode !== undefined))
            .then(json =>
              json.map(novel =>
                new Novel(
                  novel.ncode,
                  novel.title,
                  novel.story,
                  novel.writer,
                  novel.keyword.split(' '),
                  novel.length,
                  novel.general_all_no,
                  novel.novelupdated_at,
                  {
                    bigGenre: novel.biggenre,
                    genre: novel.genre,
                    isShort: novel.novel_type === 1,
                    isEnd: novel.isstop === 1,
                    isR15: novel.isr15 === 1,
                    isBoysLove: novel.isbl === 1,
                    isGirlsLove: novel.isgl === 1,
                    isViolence: novel.iszankoku === 1,
                    isReincarnation: novel.istensei === 1,
                    isWarp: novel.istenni === 1,
                  },
                )));
        })
        .catch((error) => {
          // TODO: エラー処理
          console.error('EEEEEEEEEEEEEEEEEEEEEEEEE', error);
        })
    );
  }

  constructor(
    ncode: string,
    title: string,
    description: string,
    writer: string,
    keywords: [string],
    length: number,
    stories: number,
    updatedAt: Date,
    attributes: NovelAttributes,
  ) {
    this.ncode = ncode;
    this.title = title;
    this.description = description;
    this.writer = writer;
    this.keywords = keywords;
    this.length = length;
    this.stories = stories;
    this.updatedAt = updatedAt;
    this.attributes = attributes;
  }
}
