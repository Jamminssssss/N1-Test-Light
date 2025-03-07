const listeningQuestions = [
    {
      question: '1番',
      audio: 'n1q1.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '商品を補充する' },
        { id: 2, text: 'さくら店に商品を送る' },
        { id: 3, text: 'ダイレクトメールの発送の準備をする' },
        { id: 4, text: '店で使用するかざりを作る' },
      ],
      correctAnswer: 1,
    },
    {
      question: '2番',
      audio: 'n1q2.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '体験者のビデオを見る' },
        { id: 2, text: '先生にすいせんじょうを依頼する' },
        { id: 3, text: '保険の加入手続きをする' },
        { id: 4, text: '指定科目の成績をかくにんする' },
      ],
      correctAnswer: 4,
    },
    {
      question: '3番',
      audio: 'n1q3.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '見積もりの合計金額を見直す' },
        { id: 2, text: '見積もり金額の内訳を詳しく書く' },
        { id: 3, text: 'バスが確保できたかかくにんする' },
        { id: 4, text: '見積書の有効期限を書く' },
      ],
      correctAnswer: 2,
    },
    {
      question: '4番',
      audio: 'n1q4.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '企画書を修正する' },
        { id: 2, text: '出張の資料を作成する' },
        { id: 3, text: '店の予約をキャンセルする' },
        { id: 4, text: '会食に使う店を探す' },
      ],
      correctAnswer: 1,
    },
    {
      question: '5番',
      audio: 'n1q5.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '研修期間を長くする' },
        { id: 2, text: '店の経営理念を伝える' },
        { id: 3, text: '時給を上げる' },
        { id: 4, text: '業務のしゅうじゅくどを評価する' },
      ],
      correctAnswer: 2,
    },
    {
      question: '6番',
      audio: 'n1q6.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '投書らんを設ける' },
        { id: 2, text: '政策関連の記事に図を用いる' },
        { id: 3, text: 'イベント情報の記事を増やす' },
        { id: 4, text: '子育て関連の記事を増やす' },
      ],
      correctAnswer: 2,
    },
    {
      question: '1番',
      audio: 'n1q7.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '料理が冷めにくいから' },
        { id: 2, text: '丈夫で長持ちするから' },
        { id: 3, text: '安くて見た目がはなやかだから' },
        { id: 4, text: 'いろいろな調理に使えるから' },
      ],
      correctAnswer: 2,
    },
    {
      question: '2番',
      audio: 'n1q8.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '上司が応募を快く思わないこと' },
        { id: 2, text: '新しい部署に採用される可能性が低いこと' },
        { id: 3, text: '商品開発の仕事の経験がないこと' },
        { id: 4, text: '不採用だったら今の部署にいづらくなること' },
      ],
      correctAnswer: 4,
    },
    {
      question: '3番',
      audio: 'n1q9.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: 'ほかの学校に転校したこと' },
        { id: 2, text: '友達が迎えに来てくれたこと' },
        { id: 3, text: '先生が相談に乗ってくれたこと' },
        { id: 4, text: '同じ経験をもつ人と話せたこと' },
      ],
      correctAnswer: 4,
    },
    {
      question: '4番',
      audio: 'n1q10.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '世界初のロボットの誕生' },
        { id: 2, text: 'ロボットの定義づけ' },
        { id: 3, text: 'ロボットの社会的使命' },
        { id: 4, text: 'ロボット製作に必要な情報処理' },
      ],
      correctAnswer: 3,
    },
    {
      question: '5番',
      audio: 'n1q11.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '集落のいせきとして国内最古のものであること' },
        { id: 2, text: '国内のいせきの中で規模が最も大きいこと' },
        { id: 3, text: '高度な技術で作った道具が見つかったこと' },
        { id: 4, text: '食料として作物を育てていたことがわかったこと' },
      ],
      correctAnswer: 4,
    },
    {
      question: '6番',
      audio: 'n1q12.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '安全性を確保した通学路にすること' },
        { id: 2, text: '防犯のために街灯の数を増やすこと' },
        { id: 3, text: '住民が交流できる施設を建てること' },
        { id: 4, text: '災害時の避難場所を作ること' },
      ],
      correctAnswer: 1,
    },
    {
      question: '7番',
      audio: 'n1q13.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '政治に関心をもたない人が増えたから' },
        { id: 2, text: '候補者間の主張の違いが不明確だったから' },
        { id: 3, text: '現職の知事の勝利が確実だったから' },
        { id: 4, text: '投票の時期が年末で忙しい人が多かったから' },
      ],
      correctAnswer: 2,
    },
    {
      question: '1番',
      audio: 'n1q14.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },
      ],
      correctAnswer: 2,
    },
    {
      question: '2番',
      audio: 'n1q15.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },
      ],
      correctAnswer: 4,
    },
    {
      question: '3番',
      audio: 'n1q16.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },
      ],
      correctAnswer: 3,
    },
    {
      question: '4番',
      audio: 'n1q17.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },
      ],
      correctAnswer: 3,
    },
    {
      question: '5番',
      audio: 'n1q18.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },
      ],
      correctAnswer: 1,
    },
    {
      question: '6番',
      audio: 'n1q19.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },
      ],
      correctAnswer: 2,
    },
    {
      question: '1番',
      audio: 'n1q20.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 2,
    },
    {
      question: '2番',
      audio: 'n1q21.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 3,
    },
    {
      question: '3番',
      audio: 'n1q22.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 2,
    },
    {
      question: '4番',
      audio: 'n1q23.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 3,
    },
    {
      question: '5番',
      audio: 'n1q24.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 1,
    },
    {
      question: '6番',
      audio: 'n1q25.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 3,
    },
    {
      question: '7番',
      audio: 'n1q26.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 3,
    },
    {
      question: '8番',
      audio: 'n1q27.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 2,
    },
    {
      question: '9番',
      audio: 'n1q28.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 1,
    },
    {
      question: '10番',
      audio: 'n1q29.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 2,
    },
    {
      question: '11番',
      audio: 'n1q30.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 3,
    },
    {
      question: '12番',
      audio: 'n1q31.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 1,
    },
    {
      question: '13番',
      audio: 'n1q32.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 2,
    },
    {
      question: '14番',
      audio: 'n1q33.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 3,
    },
    {
      question: '1番',
      audio: 'n1q34.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },

      ],
      correctAnswer: 2,
    },
    {
      question: '2番',
      audio: 'n1q35.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },

      ],
      correctAnswer: 2,
    },
    {
      question: '質問１',
      audio: 'n1q36.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '富田美術館' },
        { id: 2, text: 'アーク美術館' },
        { id: 3, text: '秋山美術館' },
        { id: 4, text: 'ポニー美術館' },

      ],
      correctAnswer: 1,
    },
    {
      question: '質問2',
      audio: 'n1q36.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '富田美術館' },
        { id: 2, text: 'アーク美術館' },
        { id: 3, text: '秋山美術館' },
        { id: 4, text: 'ポニー美術館' },

      ],
      correctAnswer: 2,
    },
];
  
export default listeningQuestions;