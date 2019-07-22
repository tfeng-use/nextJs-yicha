/* 这儿通过适配器模式找出显示轮播图需要的字段 */
import { formatTime } from '../utils/utils'


// 新闻
export class NewsAdapt {
  constructor(msg) {
    let { updTime, author, newsTitle, id, headers, newsCount, newsContext, newsAbstract, tags } = msg;
    this.id = id;
    this.newsTitle = newsTitle;
    this.netUrl = headers[0] && headers[0].netUrl;
    this.author = author;
    this.updTime = formatTime(updTime);
    this.readCount = newsCount.readCount;
    this.newsContext = newsContext;
    this.abstract = newsAbstract;
    this.tags = tags;
  }
}

// 文创
export class IdealsAdapt {
  constructor(msg) {
    let { updTime, author, newsTitle, id, headers, newsCount, newsContext, newsAbstract, tags } = msg;
    this.id = id;
    this.newsTitle = newsTitle;
    this.netUrl = headers[0] && headers[0].netUrl;
    this.author = author;
    this.updTime = formatTime(updTime);
    this.readCount = newsCount.readCount;
    this.newsContext = newsContext;
    this.abstract = newsAbstract;
    this.tags = tags;
  }
}

// 商机
export class BusinessAdapt {
  constructor(msg) {
    let { updTime, crtUserName, contactsName, title, id, crtUserIcon, attr2, files, crtTime, crtUserAuthState } = msg;
    this.id = id;
    this.title = title;
    this.userHeaderImg = crtUserIcon;
    this.contactsName = contactsName;
    this.updTime = formatTime(updTime || crtTime);
    this.crtUserAuthState = crtUserAuthState;
    this.content = attr2;
    this.crtUserName = crtUserName;
    this.files = files.map((item) => {
      return item.netUrl
    });
    if (this.files.length > 4) {
      this.files.splice(4);
    }
  }
}
