const questions = [
  {
    "question": "__の言葉の読み方として最もよいものを、一つ選びなさい。\n\n社会活動に参加することで、人脈を広げることができた。",
    "underlineWords": ["人脈"],
    "options": [
      { "id": 1, "text": "じんみゃく" },
      { "id": 2, "text": "じんまく" },
      { "id": 3, "text": "にんみゃく" },
      { "id": 4, "text": "にんまく" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "鈴木さんは指摘がいつも的確で、本当に賢い人だと思う。",
    "underlineWords": ["的確"],
    "options": [
      { "id": 1, "text": "すうどい" },
      { "id": 2, "text": "かしこい" },
      { "id": 3, "text": "すごい" },
      { "id": 4, "text": "えらい" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "文化の違いが食生活に顕著に現れている。",
    "underlineWords": ["顕著"],
    "options": [
      { "id": 1, "text": "げんちょ" },
      { "id": 2, "text": "けんしょ" },
      { "id": 3, "text": "けんちょ" },
      { "id": 4, "text": "げんしょ" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "相談の内容は多岐にわたった。",
    "underlineWords": ["多岐"],
    "options": [
      { "id": 1, "text": "たき" },
      { "id": 2, "text": "たじ" },
      { "id": 3, "text": "たぎ" },
      { "id": 4, "text": "たし" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "その風景は、今はもう廃れてしまった。",
    "underlineWords": ["廃れて"],
    "options": [
      { "id": 1, "text": "くずれて" },
      { "id": 2, "text": "かすれて" },
      { "id": 3, "text": "つぶれて" },
      { "id": 4, "text": "すたれて" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "家賃の相場は地域によって違う。",
    "underlineWords": ["相場"],
    "options": [
      { "id": 1, "text": "あいば" },
      { "id": 2, "text": "そうば" },
      { "id": 3, "text": "あいじょう" },
      { "id": 4, "text": "そうじょう" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "（ ）に入れるのに最もよいものを、一つ選びなさい。\n\n私はこの土地で定職に就き、生活の（　）を築いた。",
    "options": [
      { "id": 1, "text": "根拠" },
      { "id": 2, "text": "基盤" },
      { "id": 3, "text": "根源" },
      { "id": 4, "text": "基地" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "議論は難航すると思ったが、すぐに意見がまとまり、（　）結論が出た。",
    "options": [
      { "id": 1, "text": "すんなり" },
      { "id": 2, "text": "うっとうし" },
      { "id": 3, "text": "ふんわり" },
      { "id": 4, "text": "こっそり" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "さっき駅前で佐藤さんを（　）んですが、今、海外にいるはずなのに変ですね。",
    "options": [
      { "id": 1, "text": "見合わせた" },
      { "id": 2, "text": "見過ごした" },
      { "id": 3, "text": "見かけた" },
      { "id": 4, "text": "見違えた" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "市長の責任ある行動が住民の不安を（　）し、行政に対する期待が一気に高まった。",
    "options": [
      { "id": 1, "text": "一掃" },
      { "id": 2, "text": "追放" },
      { "id": 3, "text": "削除" },
      { "id": 4, "text": "排出" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "十分に煮た野菜は味が（　）柔らかく、とてもおいしかった。",
    "options": [
      { "id": 1, "text": "溶けて" },
      { "id": 2, "text": "染まって" },
      { "id": 3, "text": "滲って" },
      { "id": 4, "text": "沈んで" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "このテーブルは私が子どものころから使っているので、（　）があって捨てられない。",
    "options": [
      { "id": 1, "text": "心情" },
      { "id": 2, "text": "好感" },
      { "id": 3, "text": "熱意" },
      { "id": 4, "text": "愛着" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "現社長は創立者から経営の（　）を学んだ。",
    "options": [
      { "id": 1, "text": "データベース" },
      { "id": 2, "text": "ベテラン" },
      { "id": 3, "text": "ライフワーク" },
      { "id": 4, "text": "ノウハウ" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "__の言葉の読み方として最もよいものを、一つ選びなさい。\n\n高橋さんにはかねがねお会いしたいと思っていました。",
    "underlineWords": ["かねがね"],
    "options": [
      { "id": 1, "text": "直接" },
      { "id": 2, "text": "ぜひ" },
      { "id": 3, "text": "早く" },
      { "id": 4, "text": "以前から" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "林さんはそれを故意に捨てたらしい。",
    "underlineWords": ["故意"],
    "options": [
      { "id": 1, "text": "わざと" },
      { "id": 2, "text": "うっかり" },
      { "id": 3, "text": "いやいや" },
      { "id": 4, "text": "さっさと" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "昨日、鈴木さんにおわびした。",
    "underlineWords": ["おわび"],
    "options": [
      { "id": 1, "text": "文句を言った" },
      { "id": 2, "text": "お礼を言った" },
      { "id": 3, "text": "断った" },
      { "id": 4, "text": "謝った" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "中村さんの言葉からは強い意気込みが伝わってくる。",
    "underlineWords": ["意気込み"],
    "options": [
      { "id": 1, "text": "敬意" },
      { "id": 2, "text": "自信" },
      { "id": 3, "text": "意欲" },
      { "id": 4, "text": "信頼" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "妹は少しおびえているようだった。",
    "underlineWords": ["おびえて"],
    "options": [
      { "id": 1, "text": "焦って" },
      { "id": 2, "text": "怖がって" },
      { "id": 3, "text": "悩んで" },
      { "id": 4, "text": "悔やんで" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "私はその一言に安堵した。",
    "underlineWords": ["安堵"],
    "options": [
      { "id": 1, "text": "すっとした" },
      { "id": 2, "text": "はっとした" },
      { "id": 3, "text": "ほっとした" },
      { "id": 4, "text": "かっとした" }
    ],
    "correctAnswer": 3
  },
  {
    question: '次の言葉の使い方として最もよいものを、一つ選びなさい。\n\n閑静',
    options: [
      { id: 1, text: "そのレストランは繁華街から外れた閑静な場所にある。",highlightWords: ["閑静"] },
      { id: 2, text: "今日は朝から具合が悪かったので、会社を休んで家で閑静にしていた。",highlightWords: ["閑静"] },
      { id: 3, text: "用事が早く済み、閑静な時間ができたので、映画を見に行くことにした。",highlightWords: ["閑静"]},
      { id: 4, text: "日中はにぎやかな公園だが、夜になると急に閑静になる。",highlightWords: ["閑静"] },
    ],
    correctAnswer: 1
  },
  {
    question: 'たやすい',
    options: [
      { id: 1, text: "弟は寝坊したらしく、たやすい物だけ食べて、慌てて出かけていった。",highlightWords: ["たやすい"] },
      { id: 2, text: "伊藤氏とは大学時代からの親友で、本音が言えるたやすい関係だ。",highlightWords: ["たやすい"] },
      { id: 3, text: "せっかくの日曜日だから、ゆっくり休んでたやすく過ごそうと思う。",highlightWords: ["たやすく"]},
      { id: 4, text: "この問題は想像以上に複雑で、たやすく解決できるものではなかった。",highlightWords: ["たやすい"] },
    ],
    correctAnswer: 4
  },
  {
    question: '察する',
    options: [
      { id: 1, text: "医師たちはチームを組み、意見を出し合って、最良の治療法を察した。",highlightWords: ["察した"] },
      { id: 2, text: "気象予報士はテレビの天気予報で、来週の気温の変化を察し始めた。",highlightWords: ["察し"] },
      { id: 3, text: "鈴木さんは、私が何も言わなくても、私の気持ちを察して慰めてくれた。",highlightWords: ["察して"]},
      { id: 4, text: "外を歩いていたら急にいいアイディアを察したので、手帳にメモをした。",highlightWords: ["察した"] },
    ],
    correctAnswer: 3
  },
  {
    question: '内訳',
    options: [
      { id: 1, text: "来週の内訳を確認したが、予定がないのは木曜の夜だけだ。",highlightWords: ["内訳"] },
      { id: 2, text: "前回の出張費の内訳を見たら、交通費の割合が予想外に高かった。",highlightWords: ["内訳"] },
      { id: 3, text: "司会者は進行を間違えないように、式の内訳を何度も見直した。",highlightWords: ["内訳"]},
      { id: 4, text: "家族の健康のため、栄養の内訳を考えて食事を作っている。",highlightWords: ["内訳"] },
    ],
    correctAnswer: 2
  },
  {
    question: '食い違う',
    options: [
      { id: 1, text: "この事件は、複数の目撃者の話がそれぞれ食い違っており、不明な点が多い。",highlightWords: ["食い違って"] },
      { id: 2, text: "金庫を開けようと思ったが、どの鍵も食い違って開けられなかった。",highlightWords: ["食い違って"] },
      { id: 3, text: "何だか歩きにくいと思ったら、サンダルの左右が食い違っていた。",highlightWords: ["食い違って"]},
      { id: 4, text: "調味料を変えたのか、この料理はいつもと味が食い違っているように感じる。",highlightWords: ["食い違って"] },
    ],
    correctAnswer: 1
  },
  {
    question: '過密',
    options: [
      { id: 1, text: "雑誌で紹介されてから、この商品への過密な注文が続いているらしい。",highlightWords: ["過密"] },
      { id: 2, text: "水質汚染に関して人々の抗議が過密になり、政府は対策を迫られている。",highlightWords: ["過密"] },
      { id: 3, text: "今回の出張は過密なスケジュールで、ゆっくり食事する時間もなさそうだ。",highlightWords: ["過密"]},
      { id: 4, text: "春になると、この池の周りには、色とりどりの花が過密に咲き乱れる。",highlightWords: ["過密"] },
    ],
    correctAnswer: 3
  },
  {
    "question": "次の文の（ ）に入れるのに最もよいものを、\n\n朝の満員電車。車内の混雑を（ ） 、私の目の前に座っている学生風の男は、平然とノートパソコンを広げて、作業に没頭していた。",
    "options": [
      { "id": 1, "text": "含めて" },
      { "id": 2, "text": "もとに" },
      { "id": 3, "text": "除いて" },
      { "id": 4, "text": "よそに" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "私の父は、（ ）もしないで漫画を批判するから、本当に嫌になる。",
    "options": [
      { "id": 1, "text": "読まない" },
      { "id": 2, "text": "読み" },
      { "id": 3, "text": "読もう" },
      { "id": 4, "text": "読んで" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "（卒業生へのインタビューで）\n聞き手「学生時代にやったことで、今の仕事に役立っていることは何でしょうか。」\n田中「ラグビー部での経験ですね。チームワークの大切さを痛感しました。（ ） 、それは去年企画チームのリーダーになって初めて気づいたことですが。」",
    "options": [
      { "id": 1, "text": "要するに" },
      { "id": 2, "text": "あるいは" },
      { "id": 3, "text": "もっとも" },
      { "id": 4, "text": "ついては" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "村の郷土史をまとめるにあたり、今年９０歳になる元村長の東山さんにお話を伺った。村に初めて汽車が走ったときのことを鮮明に覚えて（ ） 、その記憶力に驚いた。",
    "options": [
      { "id": 1, "text": "おいでになり" },
      { "id": 2, "text": "差し上げ" },
      { "id": 3, "text": "まいり" },
      { "id": 4, "text": "申し上げ" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "（求人サイトの「よくある質問」で）\nＱ:インテリアに関する知識がないのですが、働けますか。\nＡ:研修があるので大丈夫です。知識はある（ ）が、それよりも人柄や仕事に取り組む姿勢を重視しています。",
    "options": [
      { "id": 1, "text": "にすぎません" },
      { "id": 2, "text": "ことは否めません" },
      { "id": 3, "text": "に越したことはありません" },
      { "id": 4, "text": "といっても過言ではありません" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "（お知らせで）\n水道管破裂による断水のため、８月１２日まで市民プールの営業を休止します。復旧状況（ ） 、営業再開が遅れる可能性がありますので、ご了承ください。",
    "options": [
      { "id": 1, "text": "次第には" },
      { "id": 2, "text": "次第に" },
      { "id": 3, "text": "次第では" },
      { "id": 4, "text": "次第" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "クレジットカードの番号等、他人に（ ）困る情報は、電子メールには書かないほうがいいそうだ。",
    "options": [
      { "id": 1, "text": "知っていても" },
      { "id": 2, "text": "知っていなくても" },
      { "id": 3, "text": "知らなくては" },
      { "id": 4, "text": "知られては" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "仕事は、決められた時間内に、いかに成果を上げるかが大切であり、単に時間をかけて（ ）と私は思う。",
    "options": [
      { "id": 1, "text": "がんばることだといってもおかしくない" },
      { "id": 2, "text": "がんばればいいというものではない" },
      { "id": 3, "text": "がんばることでしかない" },
      { "id": 4, "text": "がんばりようがない" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "現在、潜水調査船を用いた調査研究が進展中であり、いずれ近いうちに海底のより詳細な地質構造が明らかに（ ） 。",
    "options": [
      { "id": 1, "text": "なるものと思われる" },
      { "id": 2, "text": "するという思いがある" },
      { "id": 3, "text": "なったかに思える" },
      { "id": 4, "text": "するだろうと思う" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "山下「あのう、西村先輩。私、今日でこのサークルを（ ）。」\n西村「ええ？ 辞める？ 急にどうして？」",
    "options": [
      { "id": 1, "text": "辞めてしまわれたのでしょうか" },
      { "id": 2, "text": "辞めてしまったのかと思って" },
      { "id": 3, "text": "辞めさせたらどうでしょうか" },
      { "id": 4, "text": "辞めさせてもらおうかと思って" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "次の文の ★ に入る最もよいものを、一つ選びなさい。\n\n「アセビ」という、白い花を咲かせる樹木を漢字で「馬酔木」と書くのは、アセビには ★ __ __ __ そうです。",
    "underlineWords": ["★"],
    "options": [
      { "id": 1, "text": "由来する" },
      { "id": 2, "text": "有毒成分があり" },
      { "id": 3, "text": "状態になることに" },
      { "id": 4, "text": "馬が食べると酔ったような" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "「家族の時間を大切にする夫は、つい __ __ ★ __ ありがた い存在です。」",
    "underlineWords": ["★"],
    "options": [
      { "id": 1, "text": "本当に大切なものは何なのか" },
      { "id": 2, "text": "私に" },
      { "id": 3, "text": "仕事に夢中になりすぎる" },
      { "id": 4, "text": "気づかせてくれる" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "「Ｚ県知事の林和夫氏は、週刊誌で、脱税を行った __ __ ★ __ 異なり、名誉を傷つけられたとして、発行元のＸ社を相手取り訴訟を起こした。」",
    "underlineWords": ["★"],
    "options": [
      { "id": 1, "text": "事実とは全く" },
      { "id": 2, "text": "疑いがあるなどと" },
      { "id": 3, "text": "報じられた" },
      { "id": 4, "text": "ことに対し" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "「鉄道が１０年ぶりに運賃値上げに踏み切った。安全対策や原油の高騰で支出が増え、経営努力だけでは対応しきれないと判断 __ __ ★ __ 。」",
    "underlineWords": ["★"],
    "options": [
      { "id": 1, "text": "という" },
      { "id": 2, "text": "の" },
      { "id": 3, "text": "ことだ" },
      { "id": 4, "text": "して" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "「世の中にはさまざまな資格があふれているが、資格を取った __ __ __ ★ 世間は甘くないらしい。」",
    "underlineWords": ["★"],
    "options": [
      { "id": 1, "text": "だけ" },
      { "id": 2, "text": "ほど" },
      { "id": 3, "text": "で" },
      { "id": 4, "text": "希望の職につける" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "41",
    "image": require("../assets/readingimages/readingimage0.png"),
    "options": [
      { "id": 1, "text": "こちらにはいえないこともない" },
      { "id": 2, "text": "こちらにいえるとは限らない" },
      { "id": 3, "text": "こちらにもいえるとは思わなかった" },
      { "id": 4, "text": "こちらにはいえないと思うのか" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "42",
    "image": require("../assets/readingimages/readingimage0.png"),
    "options": [
      { "id": 1, "text": "そういう" },
      { "id": 2, "text": "する" },
      { "id": 3, "text": "あの" },
      { "id": 4, "text": "やろうという" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "43",
    "image": require("../assets/readingimages/readingimage0.png"),
    "options": [
      { "id": 1, "text": "トイレのことだ" },
      { "id": 2, "text": "トイレのことだ" },
      { "id": 3, "text": "トイレだからである" },
      { "id": 4, "text": "トイレだと聞いている" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "44",
    "image": require("../assets/readingimages/readingimage0.png"),
    "options": [
      { "id": 1, "text": "もっともである" },
      { "id": 2, "text": "当然である" },
      { "id": 3, "text": "ところがである" },
      { "id": 4, "text": "例えばである" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "45",
    "image": require("../assets/readingimages/readingimage0.png"),
    "options": [
      { "id": 1, "text": "認識させられたことがある" },
      { "id": 2, "text": "認識させられたおかげだ" },
      { "id": 3, "text": "認識させられる話があった" },
      { "id": 4, "text": "認識させられる出来事だった" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "筆者の考えに合うのはどれか。",
    "image": require("../assets/readingimages/readingimage1.png"),
    "options": [
      { "id": 1, "text": "教師と生徒が自由に発言し合うことも必要だ。" },
      { "id": 2, "text": "教師は生徒の考えを想像するべきだ。" },
      { "id": 3, "text": "教師は生徒の発言を待つことも必要だ。" },
      { "id": 4, "text": "教師は生徒に沈黙の時間を与えないようにすべきだ。" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "市民運動場の予約について、このお知らせは何を知らせているか。",
    "image": require("../assets/readingimages/readingimage2.png"),
    "options": [
      { "id": 1, "text": "管理事務所窓口での予約受付期間が変更になること" },
      { "id": 2, "text": "管理事務所窓口で利用者登録をすれば、インターネット上で予約ができるようになること" },
      { "id": 3, "text": "インターネット上での予約受付時間がこれまでより長くなること" },
      { "id": 4, "text": "インターネット上の予約システムの導入により、管理事務所窓口での予約ができなくなること" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "筆者によると、異文化間で対話を通して人間関係を築く上で最も大切なことは何か。",
    "image": require("../assets/readingimages/readingimage3.png"),
    "options": [
      { "id": 1, "text": "自己の価値観を理解してもらおうとする態度" },
      { "id": 2, "text": "自己の価値観を保ちながら、他者の価値観を理解する態度" },
      { "id": 3, "text": "他者と自己の共通の価値観を創り上げていく態度" },
      { "id": 4, "text": "他者の価値観の中に自己の価値観との共通点を見つける態度" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "この文章で筆者が述べていることは何か。",
    "image": require("../assets/readingimages/readingimage4.png"),
    "options": [
      { "id": 1, "text": "「普通」という視点がないと、「特別なもの」は作れない。" },
      { "id": 2, "text": "「普通の人」が普通のものを作ると、「特別なもの」になる。" },
      { "id": 3, "text": "「変な人」が普通のものを作ると、「特別なもの」になる。" },
      { "id": 4, "text": "「変な人」の視点でしか、「特別なもの」は作れない。" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "途が多いとあるが、誤に合うのはどれか。",
    "underlineWords": ["途が多い"],
    "image": require("../assets/readingimages/readingimage5.png"),
    "options": [
      { "id": 1, "text": "犬ではなくオオカミを飼おうとしたこと" },
      { "id": 2, "text": "オオカミを肉食獣だと思わなかったこと" },
      { "id": 3, "text": "恐ろしいオオカミを飼って利用しようと考えたこと" },
      { "id": 4, "text": "狩りの部隊になるのに恐ろしいオオカミを飼おうとしたこと" }
    ],
    "correctAnswer": 3
  },
  {
    "question": "筆者によると、どのようなオオカミが犬の祖先だと考えられるか。",
    "image": require("../assets/readingimages/readingimage5.png"),
    "options": [
      { "id": 1, "text": "人間から餌をもらえたオオカミ" },
      { "id": 2, "text": "狩りの上手なオオカミ" },
      { "id": 3, "text": "群れから追い出されたオオカミ" },
      { "id": 4, "text": "群れの中で下位のオオカミ" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "犬の祖先が人間と暮らすようになったきっかけについて、筆者はどのように考えているか。",
    "image": require("../assets/readingimages/readingimage5.png"),
    "options": [
      { "id": 1, "text": "人間を利用して仲間からの危険を避けようとした。" },
      { "id": 2, "text": "人間に近づいて食糧を得ようとした。" },
      { "id": 3, "text": "人間が狩りの手助けをさせた。" },
      { "id": 4, "text": "人間がえさを与えた。" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "①そんなふうにとあるが、子どもはどんなふうに大人を見ているのか。",
    "underlineWords": ["そんなふうに"],
    "image": require("../assets/readingimages/readingimage6.png"),
    "options": [
      { "id": 1, "text": "早く大人になりたいと思っている。" },
      { "id": 2, "text": "大人の姿から魅力的な部分を探している。" },
      { "id": 3, "text": "自分が失敗したときどうするかを考えている。" },
      { "id": 4, "text": "あんな大人にはなりたくないと思っている。" }
    ],
    "correctAnswer": 2
  },
  {
    "question": "②これはどの子どもにとって不幸なことはないとあるが、何が不幸なのか。",
    "underlineWords": ["これはどの子どもにとって不幸なことはない"],
    "image": require("../assets/readingimages/readingimage6.png"),
    "options": [
      { "id": 1, "text": "大人を見ても未来の自分に希望が持てないこと" },
      { "id": 2, "text": "大人を見てもすてきな大人になる自信が持てないこと" },
      { "id": 3, "text": "大人を見ても今何をしておけばいいか分からないこと" },
      { "id": 4, "text": "大人を見ても将来自分のしたいことが見つからないこと" }
    ],
    "correctAnswer": 1
  },
  {
    "question": "筆者が大人に対して伝えたいことは何か。",
    "image": require("../assets/readingimages/readingimage6.png"),
    "options": [
      { "id": 1, "text": "人生の先輩らしく、いつもかっこいい大人でいよう。" },
      { "id": 2, "text": "ベテランの子どもとして、子どもを幸福な将来へ導いてあげよう。" },
      { "id": 3, "text": "子どもたちに、大人の魅力的な世界を教えよう。" },
      { "id": 4, "text": "子どもたちに、ベテランの子どもとしての誇りを示そう。" }
    ],
    "correctAnswer": 4
  },
  {
    "question": "変われば変わるものだとあるが、科学者はどのように変わったのか。",
    "underlineWords": ["変われば変わるものだ"],
    "image": require("../assets/readingimages/readingimage7.png"),
    "options": [
      { "id": 1, "text": "以前は記者を批判的だと見ていたが、現在はメディアを信頼するようになった。" },
      { "id": 2, "text": "以前は記者と距離を置いていたが、現在は積極的にメディアとかかわるようになった。" },
      { "id": 3, "text": "以前は科学の目を気にしていたが、現在は記者の目を上気にするようになった。" },
      { "id": 4, "text": "以前は自らメディア戦略を練っていたが、現在は記者の力を借りるようになった。" }
    ],
    "correctAnswer": 2
   },
   {
    "question": "科学者との関係で、今のジャーナリズムにはどのような問題があるか。",
    "image": require("../assets/readingimages/readingimage7.png"),
    "options": [
      { "id": 1, "text": "科学者が望む論文を記事にしていない。" },
      { "id": 2, "text": "科学者が十分満足できる役割をしていない。" },
      { "id": 3, "text": "科学者から提供された情報をそのまま伝えている。" },
      { "id": 4, "text": "科学者から提供された情報を十分理解せずに報じている。" }
    ],
    "correctAnswer": 3
   },
   {
    "question": "この文章で筆者が最も言いたいことは何か。",
    "image": require("../assets/readingimages/readingimage7.png"),
    "options": [
      { "id": 1, "text": "科学者は、科学ジャーナリズムの立場をもっと理解すべきである。" },
      { "id": 2, "text": "科学者は、科学ジャーナリズムとの関係のあり方を改める視点すべきである。" },
      { "id": 3, "text": "科学ジャーナリズムは、構造内容の決定にあたって主体的であるべきだ。" },
      { "id": 4, "text": "科学ジャーナリズムは、科学の価値を正しく認めてもらえるよう努めるべきだ。" }
    ],
    "correctAnswer": 3
   },
   {
    "question": "筆者によると、まちの樹木の大きな役割とは何か。",
    "image": require("../assets/readingimages/readingimage8.png"),
    "options": [
      { "id": 1, "text": "人々に水が身近な存在であることを意識させる。" },
      { "id": 2, "text": "人々に未来都市的なイメージを与える。" },
      { "id": 3, "text": "人々を現実の暑れさから逃れさせる。" },
      { "id": 4, "text": "人々を落ち着いた気持ちにさせる。" }
    ],
    "correctAnswer": 4
   },
   {
    "question": "①それとはどういうことか。",
    "underlineWords": ["それ"],
    "image": require("../assets/readingimages/readingimage8.png"),
    "options": [
      { "id": 1, "text": "その土地に暮らす人々の好みに合わせた樹木を植えること" },
      { "id": 2, "text": "その土地の特性と人々の暮らしを考慮し、樹木を植えること" },
      { "id": 3, "text": "その土地の歴史的な樹木を大切にし、保存すること" },
      { "id": 4, "text": "その土地の季節の移ろいを感じさせる樹木を大切にすること" }
    ],
    "correctAnswer": 2
   },
   {
    "question": "②もっと提張ってとあるが、筆者の気持ちと合うものはどれか。",
    "underlineWords": ["もっと提張って"],
    "image": require("../assets/readingimages/readingimage8.png"),
    "options": [
      { "id": 1, "text": "自分の好みだけでなく、まち全体との調和も考えてほしい。" },
      { "id": 2, "text": "ガーデニングをする人達同士で、もっと情報交換をしてほしい。" },
      { "id": 3, "text": "個々の庭の花や木が、さらに美しく育つようにしてほしい。" },
      { "id": 4, "text": "個々の庭よりも、まちの共有の部分のほうに力を入れてほしい。" }
    ],
    "correctAnswer": 1
   },
   {
    "question": "筆者の考えに合うのはどれか。",
    "image": require("../assets/readingimages/readingimage8.png"),
    "options": [
      { "id": 1, "text": "人々がまちの木を愛することで、子供達が自然に関心を持つようになる。" },
      { "id": 2, "text": "人々がまちの木を愛することが、よいまちづくりにつながる。" },
      { "id": 3, "text": "人々がまちの木の手入れを怠らなければ、よいまちになる。" },
      { "id": 4, "text": "人々が季節による木の変化に関心を持つことで、愛する心が生まれる。" }
    ],
    "correctAnswer": 2
   },
   {
    "question": "雑談の良い点について、ＡとＢはどのように述べているか。",
    "image": require("../assets/readingimages/readingimage9.png"),
    "options": [
      { "id": 1, "text": "Ａはお互いの考えを認め合えると述べ、Ｂは相手の人間性が見えてくると述べている。" },
      { "id": 2, "text": "Ａは相手と意見交換ができると述べ、Ｂはバカらしい話をしても受け入れてもらえると述べている。" },
      { "id": 3, "text": "Ａは自分が気づいていなかったことに気づけると述べ、Ｂは相手の本音を知ることができると述べている。" },
      { "id": 4, "text": "Ａは誰もが自由に意見を発言できると述べ、Ｂは相手と自分との共通点を見つけることができると述べている。" }
    ],
    "correctAnswer": 3
   },
   {
    "question": "雑談をするときの姿勢について、ＡとＢはどのように述べているか。",
    "image": require("../assets/readingimages/readingimage9.png"),
    "options": [
      { "id": 1, "text": "ＡもＢも、相手の話をよく聞くことが大切だと述べている。" },
      { "id": 2, "text": "ＡもＢも、相手と自分が同じぐらいの割合で話すようにしようと述べている。" },
      { "id": 3, "text": "Ａは相手の話を聞くことが大切だと述べ、Ｂは自分から話すようにしようと述べている。" },
      { "id": 4, "text": "Ａは相手の発言の意図を考えることが大切だと述べ、Ｂはまずは相手に話をさせることが大切だと述べている。" }
    ],
    "correctAnswer": 3
   },
   {
    "question": "そうした人に出会うのが、現場に通う楽しみのひとつだとあるが、なぜか。",
    "underlineWords": ["そうした人に出会うのが、現場に通う楽しみのひとつだ"],
    "image": require("../assets/readingimages/readingimage10.png"),
    "options": [
      { "id": 1, "text": "職人から得る情報で自分のやり方の正しさが確かめられるから" },
      { "id": 2, "text": "職人たちの経験に基づいた見解である情報が得られるから" },
      { "id": 3, "text": "様々な職人たちから建築設計の多様性が学べるから" },
      { "id": 4, "text": "経験豊かな職人たちの仕事ぶりが見られるから" }
    ],
    "correctAnswer": 2
   },
   {
    "question": "鉛筆で描かれた図面について、筆者はどのように述べているか。",
    "image": require("../assets/readingimages/readingimage10.png"),
    "options": [
      { "id": 1, "text": "設計の過程で描いた人に関する情報が得られる。" },
      { "id": 2, "text": "経験を積んで設計に自信のある人ほど描けない。" },
      { "id": 3, "text": "細部は分かりにくいが、全体は把握しやすい。" },
      { "id": 4, "text": "情報を読み取りにくいが、描いた人の感情がこもっている。" }
    ],
    "correctAnswer": 1
   },
   {
    "question": "筆者は、コンピューターが社会にどのような影響を与えたと述べているか。",
    "image": require("../assets/readingimages/readingimage10.png"),
    "options": [
      { "id": 1, "text": "多くの情報の中から必要な情報を選び出しにくくなった。" },
      { "id": 2, "text": "リスクの高い・様々な種類の情報が活躍するようになった。" },
      { "id": 3, "text": "これまでに得られた経験値が社会で必要とされなくなった。" },
      { "id": 4, "text": "どこにどのようなリスクが潜んでいるか把握しにくくなった。" }
    ],
    "correctAnswer": 4
   },
   {
    "question": "この文章で筆者が最も言いたいことは何か。",
    "image": require("../assets/readingimages/readingimage10.png"),
    "options": [
      { "id": 1, "text": "コンピューター化によりリスクを経験則によって回避すべきだ。" },
      { "id": 2, "text": "コンピューター化による効率重視の傾向を改めるべきだ。" },
      { "id": 3, "text": "手によってなされる仕事の伝統を守っていくべきだ。" },
      { "id": 4, "text": "手によってなされる仕事の価値を再認識すべきだ。" }
    ],
    "correctAnswer": 4
   },
   {
    "question": "大森大学の学生のリンさんは、明日中に借りたい本がある。明日行ける図書館の中では、以下の４館が所蔵していることがわかったので、メモをした。リンさんが本を借りられるのは、次の方法のうちどれか。\n\nリンさんのメモ\n長島大学图書館 : (協定加盟)あり\nあおば大学図接客 : (協定加盟)あり\n中山工茶大学图書館 : (協定加盟)あり\nさくら大学図芸館 : (協定加盟)なし",
    "image": require("../assets/readingimages/readingimage11.png"),
    "options": [
      { "id": 1, "text": "学生証を持参して、長島大学図書館に行く。" },
      { "id": 2, "text": "今から紹介状を申請し、それを持参して、あおば大学図書館に行く。" },
      { "id": 3, "text": "学生証を持参して、中山工業大学図書館に行く。" },
      { "id": 4, "text": "今から紹介状を申請し、それを持参して、さくら大学図書館に行く。" }
    ],
    "correctAnswer": 1
   },
   {
    "question": "大森大学の学生のロイさんは利用したい資料があるが、大森大学にはなかった。他大学に行く時間がないため、複写依頼が資料借用のサービスを利用しようと考えている。ロイさんが注意しなければならないこととして合っているのは、次のどれか。",
    "image": require("../assets/readingimages/readingimage11.png"),
    "options": [
      { "id": 1, "text": "複写依頼は、資料を所蔵する大学のホームページから行わなければならない。" },
      { "id": 2, "text": "複写依頼は、一度に２件以上まとめて申し込むことはできない。" },
      { "id": 3, "text": "資料の借用に必要な送料は、半額を自分が負担しなければならない。" },
      { "id": 4, "text": "借用した資料は、大森大学図書館内で閲覧しなければならない。" }
    ],
    "correctAnswer": 4
   },
];
  
export default questions;
  