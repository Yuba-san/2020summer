var id = setInterval(draw, 1);
var enndo = setInterval(saigo, 1);

var start = false
let title = document.getElementById("title");

var stage = "1"      //ステージ数
var next = true  //選択用
var dissatisfaction = 0 //不満
var deceased = 1000
{//ルート分岐用
    var Dictatorship = 0  //独裁
    var Democracy = 0    //民主主義
    var Socialism = 0    //社会主義
    var NATO = false       //NATOからの支援
    var ChinaRussia = false   //中国、ロシアからの支援
    var speech1 = false  //慰霊スピーチ
    var criticism = false //民主主義国からの非難
}
var sixA = false //合流用 6A
var sixB = false //合流用 6B

//エンディング
var ending = 0
//エンディング 1 彼らの死は何のためだったのか？ エンディング 2 我々の勝利 エンディング 3 独裁の始まり エンディング 4 永遠の革命 5 BadEnd 6 失脚
deceased = + 1000
{
    const startbutton = document.getElementById("startbutton"); //スタートボタン
    Select1 = document.getElementById("select1");  //選択肢のボタン
    Select2 = document.getElementById("select2");
    report = document.getElementById("report");  //上の方に出てくる説明
    debagu = document.getElementById("debug")
    ENDING = document.getElementById("end")
    bodexi = document.getElementById("body")
    startbutton.innerHTML = "start";  //スタートボタンの文字
    Select1.style.display = "none";   //最初これらは非表示にします
    Select2.style.display = "none";
    report.style.display = "none";
}

function start1() {
    title.style.display = "none";
    startbutton.style.display = "none";  //スタートボタンと タイトルを非表示
    report.style.display = "inline-block";  //これらを表示し start tag を ON
    Select1.style.display = "inline-block";
    Select2.style.display = "inline-block";
    start = true
}

function draw() {
    if (start == true) {
        if (stage == "1") //stage 1 最初の分岐  1
        {
            report.innerHTML = "首相！国民軍が首都に攻撃してきました！"
            Select1.innerHTML = "徹底抗戦だ！"
            Select2.innerHTML = "亡命の準備を。"
        }
        if (stage == "2")  //stage 2 支援国の決定 2
        {
            report.innerHTML = "この国は大国から援助を受ける必要があります。どこにしますか？"
            Select1.innerHTML = "自由民主主義のNATOに"
            Select2.innerHTML = "ロシアや中国がいいだろう"
            report.style.fontSize = "40px"
        }
        if (stage == "3") //反撃に出るか 防衛をするか  3
        {
            report.innerHTML = "現在前線では膠着状態が続いています。ご指示を"
            Select1.innerHTML = "我々は大国からの支援がある！反撃だ！"
            Select2.innerHTML = "まだ反撃は早いだろう。防衛だ"
            report.style.fontSize = "48px"
        }
        //4
        {
            if (stage == "4A") //反抗作戦の現状  4A
            {
                report.innerHTML = "反抗作戦によって現状、死傷者多数です。"
                Select1.innerHTML = "作戦は続行だ"
                Select2.innerHTML = "そうか...今夜慰霊演説をする"
            }
            if (stage == "4B")//作戦
            {
                report.innerHTML = "防衛戦略の結果野党内から不満が出ています。"
                Select1.innerHTML = "時は満ちた！反撃だ！"
                Select2.innerHTML = "野党どもを黙らせろ。"
            }
        }
        {//5
            if (stage == "5A") //戦果と作戦  5A
            {
                report.innerHTML = "作戦の結果、首都から150kmほどまで戦線の押し上げに成功しましたが、膠着状態です。"
                Select1.innerHTML = "都市部で徴兵をし、再び攻勢だ！"
                Select2.innerHTML = "まずはゲリラの掃討を"
                report.style.fontSize = "40px"
            }
            if (stage == "5B") //不満。  5B
            {
                report.innerHTML = "反撃の結果、戦線の押上に成功しました。"
                Select1.innerHTML = "止まること無く前進せよ！"
                Select2.innerHTML = "ゲリラの掃討を優先しろ。"
            }
            {
                if (stage == "5C" && ChinaRussia == true)//作戦
                {
                    report.innerHTML = "<br>次の作戦は？"
                    select1.innerHTML = "攻撃だ！"
                    select2.innerHTML = "防衛せよ"
                }
                if (stage == "5C" && NATO == true)//右傾化
                {
                    report.innerHTML = "NATOから批判を受けています"
                    select1.innerHTML = "弁明をする"
                    select2.innerHTML = "支援がなくても戦える！"
                }
            }
        }
        {//6
            if (stage == "6A" || sixA == true) //ゲリラの脅威   6A
            {
                report.innerHTML = "補給線がゲリラによって攻撃を受け補給が足りていません。"
                Select1.innerHTML = "補給がなくても戦える！"
                Select2.innerHTML = "一旦攻勢を止めゲリラの掃討作戦を"
                report.style.fontSize = "48px"
            }
            if (stage == "6B" || sixB == true) //空爆 6B
            {
                report.innerHTML = "昨夜の空爆の対処を。"
                Select1.innerHTML = "罪のない民間人を守れ！"
                Select2.innerHTML = "工場の疎開を急がせろ！"
                report.style.fontSize = "48px"
            }
            if (stage == "6C" && ChinaRussia == true) //戦果 6C  LOOK 
            {
                report.innerHTML = "敵が疲弊していたこともあり、戦線押上に成功しました！"
                Select1.innerHTML = "いいぞ！もっと敵を叩くのだ！"
                Select2.innerHTML = "油断してはダメだゲリラの掃討を"
            }
            if (stage == "6D" && ChinaRussia == true) //不満 6D   LOOK
            {
                report.innerHTML = "進展のない戦線から不満が出ています。"
                Select1.innerHTML = "敵側に対話を呼びかけよう"
                Select2.innerHTML = "時は満ちた！今こそ攻撃だ！"
            }
            if (stage == "6E") //援助の減少 6E
            {
                report.innerHTML = "援助の削減及び他の民主主義勢力への援助をするとNATOが発表しました。"
                Select1.innerHTML = "もはやここまでか..."
                Select2.innerHTML = "最後まで闘うぞ！"
            }
            if (stage == "6F") //滅びの道 (badEND確定) 6F
            {
                report.innerHTML = "軍隊内で逃亡や裏切りが多発しております。"
                Select1.innerHTML = "後退するものは射殺しろ！ "
                Select2.innerHTML = "我々は戦える！反撃だ！"
            }
        }
        {//7
            if (stage == "7A") //大失敗 7A
            {
                report.innerHTML = "ゲリラにより補給が寸断され、作戦は失敗しました"
                Select1.innerHTML = "隠蔽しろ"
                Select2.innerHTML = "一部公開を。"
            }
            if (stage == "7B") //第三作戦 7B
            {
                report.innerHTML = "補給線も安定してきました。作戦内容の決定を。"
                Select1.innerHTML = "突出部の包囲"
                Select2.innerHTML = "大規模な分断作戦"
            }
            if (stage == "7C") //ストライキ！ 7C
            {
                report.innerHTML = "一部の労働者が、「国民を守れ！」とストライキを行っています。"
                Select1.innerHTML = "首謀者を拘束しろ！"
                Select2.innerHTML = "勝手にやってろ。"
            }
            if (stage == "7D") //被害 7D
            {
                report.innerHTML = "軍需工場などが破壊され、兵器の製造に遅れが出ています"
                Select1.innerHTML = "工場疎開を！"
                Select2.innerHTML = "戦闘機支援を要請しよう"
            }
            if (stage == "7E") //戦果 7E
            {
                report.innerHTML = "作戦は苦戦を強いられ被害が拡大してしまいました。"
                Select1.innerHTML = "後処理をしておいてくれ。"
                Select2.innerHTML = "一部公開のための会議を開く"
            }
            if (stage == "7F") //作戦 7F
            {
                report.innerHTML = "将軍から大規模作戦プランと通常作戦プランが提出されています。"
                Select1.innerHTML = "大規模作戦だ！"
                Select2.innerHTML = "確実に勝利を掴むために通常作戦だ！"
            }
            if (stage == "7G") //失敗 7G
            {
                report.innerHTML = "作戦は苦戦を強いられ被害が拡大してしまいました。"
                Select1.innerHTML = "後処理をしておいてくれ。"
                Select2.innerHTML = "一部公開のための会議を開く"
            }
            if (stage == "7H") //失敗 7H
            {
                report.innerHTML = "敵の幹部は対話を拒絶した模様です"
                Select1.innerHTML = "平和をもたらすのは対話だ！"
                Select2.innerHTML = "分らせてやろう。将軍を呼べ"
            }
            if (stage == "7J") //蜂起 7J         7Iはお亡くなりになりました。
            {
                report.innerHTML = "首都近郊で反乱軍が蜂起しました！"
                Select1.innerHTML = "兵士を動員し鎮圧せよ！"
                Select2.innerHTML = "彼らが正しいだろう..."
            }
            if (stage == "7K")//介入 7K
            {
                report.innerHTML = "多国籍軍が内戦への介入を表明しました。"
                Select1.innerHTML = "私が馬鹿げていた。"
                Select2.innerHTML = "最後の一人となろうとも抵抗する！"
            }
            if (stage == "7L") //失敗とデモ 7L 狂ったトップ
            {
                report.innerHTML = "大規模なデモが首都近郊で発生。一部が暴徒化しています。"
                Select1.innerHTML = "彼らが正しいだろう..."
                Select2.innerHTML = "弾圧せよ！この内戦に勝つために"
            }
        }//7
        {//Bad8
            if (stage == "Bad8A") //Bad8A 対策  完全に狂いきっている
            {
                report.innerHTML = "多国籍軍に対する準備はどうします？"
                Select1.innerHTML = "万全の対策を"
                Select2.innerHTML = "やはり馬鹿げていた。拳銃を。"
            }
            if (stage == "Bad8B") //Bad8B 介入
            {
                report.innerHTML = "多国籍軍が介入してきました。"
                Select1.innerHTML = "もう無理だ。降伏しよう。"
                Select2.innerHTML = "対策を"
            }
            if (stage == "Bad9") //Bad9A もう終わりだ！
            {
                report.innerHTML = "もう終わりだ！こんなこと馬鹿げている！"
                Select1.innerHTML = "アハハハハハハ"
                Select2.innerHTML = "ここからどうするか見ものだ"
            }
        }
        {//8
            if (stage == "8A") //発覚 8A
            {
                report.innerHTML = "隠蔽が脱走兵により発覚しました。"
                Select1.innerHTML = "真実を伝えるしかない..."
                Select2.innerHTML = "刺激しない方が良いだろう"
            }
            if (stage == "8B")//反感 8B
            {
                report.innerHTML = "国民から不満が出ています"
                Select1.innerHTML = "国民をこの失敗を使って扇動するぞ"
                Select2.innerHTML = "それより次の作戦だ"
            }
            if (stage == "8C")//物別れ 8C
            {
                report.innerHTML = "相手は対話要求を黙殺したと思われます。"
                Select1.innerHTML = "継続的な対話が平和をもたらす"
                Select2.innerHTML = "分らせてやる必要がありそうだな"
            }
            if (stage == "8D") //優勢  8D
            {
                report.innerHTML = "多大な損害を出しながらも作戦に成功しました。"
                Select1.innerHTML = "対話を呼びかけよう"
                Select2.innerHTML = "叩きのめす準備を"
            }
            if (stage == "8E") //反感 6E
            {
                report.innerHTML = "ストライキの鎮圧により、抗議集会が開かれています"
                Select1.innerHTML = "逮捕せよ！"
                Select2.innerHTML = "経済に響かなければそれでいい。"
            }
            if (stage == "8F") //ストライキ収束 8F
            {
                report.innerHTML = "ストライキは終了したようです。今後の戦略は？"
                Select1.innerHTML = "陸軍に作戦計画を練るように伝えてくれ"
                Select2.innerHTML = "そろそろ対話を呼びかけよう"
            }
            if (stage == "8G") //戦略 8G
            {
                report.innerHTML = "工場の疎開が完了しました。今後の戦略は？"
                Select1.innerHTML = "そろそろ対話を呼びかけよう"
                Select2.innerHTML = "陸軍に作戦計画を練るように伝えてくれ"
            }
            if (stage == "8H") //戦果 8H
            {
                report.innerHTML = "戦闘機支援もあり、制空権も安定して来ています。"
                Select1.innerHTML = "次の軍事作戦準備を"
                Select2.innerHTML = "そろそろ対話を呼びかけよう"
            }
            if (stage == "8I") //被害と戦果 8I
            {
                report.innerHTML = "被害は大きいですがかなりの打撃を与えました！"
                Select1.innerHTML = "そろそろ対話を呼びかけよう"
                Select2.innerHTML = "叩き潰す準備を"
            }
            if (stage == "8J") //戦果 8J
            {
                report.innerHTML = "敵は少しずつ後退して行き、作戦は成功しました"
                Select1.innerHTML = "対話を呼びかけてもいい頃だ"
                Select2.innerHTML = "次の作戦準備を。"
            }
            if (stage == "8K") //発覚 8K
            {
                report.innerHTML = "脱走兵により、隠蔽が発覚されました。"
                Select1.innerHTML = "真実を国民に伝えよう..."
                Select2.innerHTML = "無視をしておけ。"
            }
            if (stage == "8L") //一部公開による反感 8L
            {
                report.innerHTML = "作戦の失敗による不満が高まっております"
                Select1.innerHTML = "この機に乗じて国民を扇動するのだ"//BadEnd
                Select2.innerHTML = "反応などしなくていい"
            }
            if (stage == "8M") //捕虜解放要求 8M
            {
                report.innerHTML = "相手側は捕虜の解放をすれば対話に応じるそうです。"
                Select1.innerHTML = "仕方がない承諾しよう"
                Select2.innerHTML = "断じて受け入れられない！"
            }
            if (stage == "8N")//和平要求失敗 8N
            {
                report.innerHTML = "対話を相手は拒否しています"
                Select1.innerHTML = "作戦と対話と同時進行で進めてくれ"
                Select2.innerHTML = "もう対話の必要はない！"
            }
            if (stage == "8O") //不動の兵士
            {
                report.innerHTML = "新たに動員した兵士が現在動いていません！"
                Select1.innerHTML = "蜂起の首謀者と話がしたい。"
                Select2.innerHTML = "馬鹿げていた。私は国のために辞任する。"
            }
        }//8
        {//会議用 -----------------------------------------------------------

            if (stage == "discourse1") {
                report.innerHTML = "捕虜の交換条約には合意してくれるかね？"
                Select1.innerHTML = "いいだろう"
                Select2.innerHTML = "認められない。"
            }
            if (stage == "discourse2") {
                report.innerHTML = "各国から要求されている、非武装地域の決定について"
                Select1.innerHTML = "いいだろう"
                Select2.innerHTML = "一部であればいいだろう。"
            }
            if (stage == "discourse3") {
                report.innerHTML = "最後に停戦合意の件についてだが、そちらの意見は？"
                Select1.innerHTML = "国民のためにも停戦をしよう。"
                Select2.innerHTML = "停戦は認められない。"
            }
            if (stage == "discourse1B") {
                report.innerHTML = "捕虜について"
                Select1.innerHTML = "捕虜の全員解放を要求する"
                Select2.innerHTML = "捕虜交換条約を結ぶ"
            }
            if (stage == "discourse2B") {
                report.innerHTML = "非武装地域について"
                Select1.innerHTML = "非武装地域を制定する"
                Select2.innerHTML = "発言はしない"
            }
            if (stage == "discourse3B") {
                report.innerHTML = "停戦について"
                Select1.innerHTML = "停戦をする"
                Select2.innerHTML = "発言はしない"
            }
            if (stage == "discourse1C") {
                report.innerHTML = "我々が要求するのはあなたの辞任だ"
                Select1.innerHTML = "受け入れられない"
                Select2.innerHTML = "他の方法を。"
            }
            if (stage == "discourse2C") {
                report.innerHTML = "ならば話すことはない。"
                Select1.innerHTML = "ああ"
                Select2.innerHTML = "そうか"
            }
            {//9
                if (stage == "9A")//後悔 9A
                {
                    report.innerHTML = "国民の不満が高まっています！"
                    Select1.innerHTML = "知るか、それより作戦だ"
                    Select2.innerHTML = "不満払拭を"
                }
                if (stage == "9C")//失敗 9B
                {
                    report.innerHTML = "扇動は裏目に出て、国民の不満が高まっています！"
                    Select1.innerHTML = "とにかく作戦を！！"
                    Select2.innerHTML = "援助国にさらなる援助を要求しろ！"
                }
                if (stage == "9D")//失敗 9d 失敗ばっかりやな...
                {
                    report.innerHTML = "作戦も上手くいかず、あまり良い状況ではありません。"
                    Select1.innerHTML = "敵も負担が大きいだろう。対話をしよう"
                    Select2.innerHTML = "攻撃を重ねればいつかは勝つ！"
                }
                if (stage == "9F")//成功 9F
                {
                    report.innerHTML = "我々は勝利を収めました！"
                    Select1.innerHTML = "対話をしよう。"//対話
                    Select2.innerHTML = "徹底的に叩きつぶせ！"//攻撃
                }
                if (stage == "9H")//受諾 9H
                {
                    report.innerHTML = "相手側が対話の用意がある。などと発表しました。"
                    select1.innerHTML = "犠牲は少ない方がいい。受諾しよう"
                    Select2.innerHTML = "反政府組織に会う義理はない。"
                }
                {
                    if (stage == "9I" && NATO == true)//NATOからの非難
                    {
                        report.innerHTML = "NATOから民主主義が失われつつあると非難を受けました。"
                        select1.innerHTML = "いずれ落ち着くだろう。<br>無視だ。"
                        Select2.innerHTML = "治安維持が目的だ。<br>そろそろ釈放してやれ。"
                    }
                    if (stage == "9I" && ChinaRussia == true)//民主主義国による非難
                    {
                        report.innerHTML = "抗議集会の参加の逮捕を受けて<br>民主主義国が非難を表明しています。"
                        select1.innerHTML = "我々には関係ない。無視せよ"
                        Select2.innerHTML = "治安維持が目的だ。<br>そろそろ釈放してやれ。"
                    }
                }
                if (stage == "9J")//収束
                {
                    report.innerHTML = "抗議集会は最近は落ち着いてきております。<br>今後の作戦は？"
                    select1.innerHTML = "攻勢をかけろ！"
                    Select2.innerHTML = "敵勢力に対話を呼びかけよう。"
                }
                if (stage == "9K")//戦果と作戦
                {
                    report.innerHTML = "現在我が軍は被害を出しながらも優勢です。"
                    select1.innerHTML = "徹底的に叩きつぶせ！"
                    Select2.innerHTML = "そろそろ対話をしてもいいだろう"
                }
                if (stage == "9L")//拒否
                {
                    report.innerHTML = "相手は対話を拒否しました。"
                    select1.innerHTML = "攻撃せよ!"
                    Select2.innerHTML = "対話こそが平和をもたらす！"
                }
                if (stage == "9M")//苦戦 O
                {
                    report.innerHTML = "対話に関して相手は黙殺した模様です。"
                    select1.innerHTML = "ならば徹底的に叩き潰すまでだ！"
                    Select2.innerHTML = "もう血が流れるのはごめんだ。"
                }
                if (stage == "9N")//9Nないし 9O 判断
                {
                    report.innerHTML = "首相！作戦の準備が完了しました！"
                    select1.innerHTML = "叩き潰すのだ！"
                    Select2.innerHTML = "対話こそ平和への道だ！"
                }
                if (stage == "9P")//拒否
                {
                    report.innerHTML = "相手は対話要求を黙殺した模様です"
                    select1.innerHTML = "そうか、攻撃の準備を。"//攻撃
                    Select2.innerHTML = "対話こそ平和への道だ！"//対話
                }
                if (stage == "9R")//戦果
                {
                    report.innerHTML = "戦線押上には成功したものの被害は大きいです。"
                    select1.innerHTML = "対話を呼びかけよう"//対話
                    Select2.innerHTML = "敵に休む暇を与えるな！攻撃だ！"//つぶす
                }
                if (stage == "9T")//攻撃か？
                {
                    report.innerHTML = "首相、作戦の準備が整ったと報告がありました"
                    select1.innerHTML = "作戦を実行せよ！"
                    Select2.innerHTML = "敵に最後通牒を送れ"
                }
                if (stage == "9U")//9Uないし9V 
                {
                    report.innerHTML = "敵軍が攻勢にでた。と報告が上がっております"
                    select1.innerHTML = "砂漠の地形を使い防衛せよ"
                    Select2.innerHTML = "兵士を動員して敵を止めるのだ！"
                }
                if (stage == "9W")//不満爆発
                {
                    report.innerHTML = "デモ隊がすぐそこまで迫っています！"
                    select1.innerHTML = "彼らに訴えかけよう。"//演説
                    Select2.innerHTML = "航空機の手配を。"//逃亡
                }
                if (stage == "9X")//失敗(式低い)9X
                {
                    report.innerHTML = "前線の兵士の士気が低く、作戦は失敗しました。"
                    select1.innerHTML = "撤退するものは容赦無く撃ち抜け！"
                    Select2.innerHTML = "我々は正義ではなかった。"
                }
                if (stage == "9Z")//敵の大攻勢
                {
                    report.innerHTML = "敵軍が予想を上回る数で攻勢にでています！"
                    select1.innerHTML = "もはやここまでか。"
                    Select2.innerHTML = "我々は決して屈しない！"
                }
                if (stage == "9あ")//泥沼化
                {
                    report.innerHTML = "我が軍は、士気が低く泥沼化しております。"
                    select1.innerHTML = "撤退するものは容赦無く撃ち抜け！"
                    Select2.innerHTML = "我々は正義ではなかった。"
                }
            }//9
            {//10
                if (stage == "10A")//失敗
                {
                    report.innerHTML = "作戦は失敗し、戦線は膠着しました。"
                    select1.innerHTML = "ああ..."
                    select2.innerHTML = "そうか..."
                }
                if (stage == "10B")//失敗
                {
                    report.innerHTML = "国民は未だに不満を抱いています..."
                    select1.innerHTML = "そうか..."
                    select2.innerHTML = "(ため息を吐く)"
                }
                if (stage == "10C" || stage == "10D" || stage == "10H")//失脚
                {
                    report.innerHTML = "首相。あなたは本日付けで解任となります。"
                    select1.innerHTML = "失脚か。"
                    select2.innerHTML = "どうするか見ものだ"
                }
                if (stage == "10E" || stage == "")//苦戦
                {
                    report.innerHTML = "前線では苦戦を強いられています。"
                    select1.innerHTML = "この戦争は終わるのだろうか..."
                    select2.innerHTML = "ああ..."
                }
                if (stage == "10F")//敵の屈服！
                {
                    report.innerHTML = "敵武装組織は降伏しました！"
                    select1.innerHTML = "我々の勝利だ！"
                    select2.innerHTML = "祖国に栄光あれ！"
                }
                if (stage == "10G" || stage == "10I" || stage == "10J" || stage == "10K")//戦線膠着
                {
                    report.innerHTML = "戦線は未だに膠着状態です。"
                    select1.innerHTML = "ああ..."
                    select2.innerHTML = "うむ..."
                }
                if (stage == "10L") {
                    report.innerHTML = "攻勢に出ましたが、膠着状態です。"
                    select1.innerHTML = "この内戦はいつ終わるのだろうか..."
                    select2.innerHTML = "(ため息を吐く)"
                }
                if (stage == "10M") {
                    report.innerHTML = "敵は捕虜の解放を要求してきました。"
                    select1.innerHTML = "解放しろ。"
                    select2.innerHTML = "受け入れられない。"
                }
                if (stage == "10N")//敵の抵抗 10N   N chu の N
                {
                    report.innerHTML = "敵の抵抗は激しく、死傷者多数です。"
                    select1.innerHTML = "この内戦はいつ終わるのだろうか..."
                    select2.innerHTML = "ああ..."
                }
                if (stage == "10Z") {
                    report.innerHTML = "暴徒が官邸に進入してきました！"
                    select1.innerHTML = "すぐに鎮圧しろ！！"
                    select2.innerHTML = "もはやここまでか。"
                }
                if (stage == "10あ") {
                    report.innerHTML = "人の命を軽視する鬼め。"
                    select1.innerHTML = "(笑う)"
                    select2.innerHTML = "どうやって国を立て直すか見ものだ。"
                }
            }
        }
    }
    //debug用
    debagu.innerHTML = stage
}
//セレクション1 つまり 上のボタン
function selection1() {
    if (stage === "1" && next == true) //stage 1
    {
        stage = "2"
        next = false
    }
    if (stage === "2" && next == true) //stage 2 
    {
        stage = "3"
        Democracy + 1
        next = false
        NATO = true
    }
    if (stage === "3" && next == true) //stage 3 
    {
        stage = "4A"
        next = false
        deceased = deceased + 1000
        dissatisfaction + 2
    }
    {//4
        if (stage === "4A" && next == true) //stage 4A & attack = true 
        {
            stage = "5A"
            next = false
        }
        if (stage === "4B" && next == true) // stage 4B attack = false
        {
            stage = "5B"
            next = false
        }
    }
    {//5
        if (stage === "5A" && next == true) //stage 5A attack = true
        {
            stage = "6A"
            next = false
            deceased = deceased + 500
        }
        if (stage === "5B" && next == true) //stage 5B attack = false
        {
            stage = "6A"
            next = false
            deceased = deceased + 400 //反抗作戦による死者数
            sixA = true
        }
        {//4.5
            if (stage === "5C" && next == true && ChinaRussia == true) //stage 5C attack = false
            {
                next = false
                stage = "6C"
                deceased = deceased + 200
            }
            if (stage === "5C" && next == true && NATO == true) {
                stage = "6E"
                next = false
            }
        }// /4.6
    } //5
    {//6
        if (stage === "6A" && next == true)//ゲリラの脅威 6A
        {
            next = false
            stage = "7A"
            deceased = deceased + 500
        }
        if (stage === "6B" && next == true)//空爆 6B
        {
            next = false
            stage = "7D"
            dissatisfaction + 1
        }
        if (stage === "6C" && next == true) //戦果 6C 攻撃 look
        {
            next = false
            stage = "7E"
            deceased = deceased + 700
        }
        if (stage === "6D" && next == true) //不満 6D look 
        {
            next = false
            stage = "7G"
            deceased = deceased + 800
        }
        if (stage === "6E" && next == true) //援助の減少6E look
        {
            next = false
            stage = "End"
            ending = 6
        }
        if (stage === "6F" && next == true) //滅びの道 6F look
        {
            next = false
            stage = "7K"
            deceased = deceased + 200
        }
    }//6
    {//7
        if (stage === "7A" && next == true) //大失敗　7A 隠蔽
        {
            next = false
            stage = "8A"
            dissatisfaction + 1
        }
        if (stage === "7B" && next == true) //第三作戦7B 対話
        {
            next = false
            stage = "8C"
            deceased = deceased + 400
        }
        if (stage == "7C" && next == true) //ストライキ！7C 弾圧
        {
            next = false
            stage = "8E"
        }
        if (stage === "7D" && next == true) //工場を疎開させる 7D
        {
            next = false
            stage = "8G"
        }
        if (stage === "7E" && next == true) //戦果 7E
        {
            next = false
            stage = "8A"
        }
        if (stage === "7F" && next == true) // 大規模作戦 7F lookゾーン
        {
            next = false
            stage = "8I"
            deceased = deceased + 800
        }
        if (stage === "7G" && next == true) //失敗 7G 隠蔽
        {
            next = false
            stage = "8K"
        }
        if (stage === "7H" && next == true) //失敗 7H 対話
        {
            next = false
            stage = "8M"
        }
        if (stage === "7J" && next == true) //蜂起 7J 動員
        {
            next = false
            stage = "8O"
            deceased = deceased + 200
        }
        if (stage === "7K" && next == true) //介入 7K 降伏 ok 
        {
            next = false
            stage = "End"
            ending = 7
            deceased = deceased + 200
        }
        if (stage === "7L" && next == true) //失敗とデモ 7L  降伏 ok
        {
            next = false
            stage = "End"
            ending = 7
            deceased = deceased + 200
        }
    }//7
    {//8
        if (stage === "8A" && next == true) //
        {
            next = false
            stage = "9A"

        }
        if (stage === "8B" && next == true) //
        {
            next = false
            stage = "9C"
        }
        if (stage === "8C" && next == true) //
        {
            next = false
            stage = "discourse1"
        }
        if (stage === "8D" && next == true) //
        {
            next = false
            stage = "9G"
        }
        if (stage === "8E" && next == true) //反感
        {
            next = false
            stage = "9I"
        }
        if (stage === "8F" && next == true) //
        {
            next = false
            stage = "9K"
            deceased = deceased + 500
        }
        if (stage === "8G" && next == true) //
        {
            next = false
            stage = "9M"
        }
        if (stage === "8H" && next == true) //
        {
            next = false
            stage = "9N"
            deceased = deceased + 500
        }
        if (stage === "8I" && next == true) //
        {
            next = false
            stage = "discourse1B"
        }
        if (stage === "8J" && next == true) //
        {
            next = false
            stage = "9S"
        }
        if (stage === "8K" && next == true) //
        {
            next = false
            stage = "9U"
        }
        if (stage === "8L" && next == true) //
        {
            next = false
            stage = "9W"
        }
        if (stage === "8M" && next == true) //
        {
            next = false
            stage = "9Y"
        }
        if (stage === "8N" && next == true) //
        {
            next = false
            stage = "9あ"
        }
        if (stage === "8O" && next == true) //look
        {
            next = false
            stage = "End"
            ending = "9え"
        }
    }//8
    {//9
        if (stage === "9A" && next == true)//不満
        {
            next = false
            stage = "10A"
            deceased = deceased + 800
        }
        if (stage === "9C" && next == true)//失敗
        {
            next = false
            stage = "10C"
            deceased = deceased + 800
        }
        if (stage === "9D" && next == true)//失敗
        {
            next = false
            stage = "discourse1"
        }
        if (stage === "9F" && next == true)//成功
        {
            next = false
            stage = "discourse1B"
        }
        if (stage === "9H" && next == true)//受諾
        {
            next = false
            stage = "discourse1"
        }
        {
            if (stage === "9I" && ChinaRussia == true && next == true) {
                next = false
                stage = "10J"
            }
            if (stage === "9I" && NATO == true && next == true) {
                next = false
                stage = "10H"
            }
        }
        if (stage === "9J" && next == true) {
            next = false
            stage = "10L"
            deceased = deceased + 900
        }
        if (stage === "9K" && next == true) {
            next = false
            stage = "10N"
        }
        if (stage === "9L" && next == true) {
            next = false
            stage = "10O"
            deceased = deceased + 700
        }
        if (stage === "9M" && next == true) {
            next = false
            stage = "10Q"
            deceased = deceased + 800
        }
        if (stage === "9N" && next == true || stage === "9O" && next == true) {
            next = false
            stage = "10S"
            deceased = deceased + 300
        }
        if (stage === "9P" && next == true) {
            next = false
            stage = "10E"//(10T)
            deceased = deceased + 700
        }
        if (stage === "9R" && next == true) {
            next = false
            stage = "discourse1"
        }
        if (stage === "9T" && next == true) {
            next = false
            stage = "10V"
            deceased = deceased + 700
        }
        if (stage === "9U" && next == true || stage === "9V" && next == true) {
            next = false
            stage = "10X"
            deceased = deceased + 200
        }
        if (stage === "9W" && next == true) {
            next = false
            stage = "10Z"
        }
        if (stage === "9Z" && next == true) {
            next = false
            stage = "End"
            ending = 3
        }
        if (stage === "9あ" && next == true || stage === "9い" && next == true) {
            next = false
            stage = "10う"
        }
    }//9
    {//10
        if (stage === "10A" && next == true) {
            next = false
            stage = "End"
            ending = 8
        }
        if (stage === "10B" && next == true) {
            next = false
            stage = "End"
            ending = 8
        }
        if (stage === "10C" && next == true || stage === "10D" && next == true) {
            next = false
            stage = "End"
            ending = 6
        }
        if (stage === "10E" && next == true || stage === "10O" && next == true || stage === "10Q" && next == true || stage === "10S" && next == true || stage === "10T" && next == true || stage === "10V" && next == true || stage === "10X" && next == true || stage === "10Y" && next == true) {
            next = false
            stage = "End"
            ending = 8
        }
        if (stage === "10F" && next == true || stage === "10U" && next == true) {
            next = false
            stage = "End"
            ending = 2
        }
        if (stage === "10G" && next == true || stage === "10I" && next == true || stage === "10J" && next == true || stage === "10K" && next == true) {
            next = false
            stage = "End"
            ending = 8
        }
        if (stage === "10H" && next == true) {
            next = false
            stage = "End"
            ending = 6
        }
        if (stage === "10L" && next == true) {
            next = false
            stage = "End"
            ending = 8
        }
        if (stage === "10M" && next == true || stage === "10P" && next == true || stage === "10R" && next == true) {
            next = false
            stage = "discourse1"
        }

        if (stage === "10N" && next == true) {
            next = false
            stage = "End"
            ending = 8
        }
    }//10
    {//会談
        if (stage === "discourse1" && next == true) {
            next = false
            stage = "discourse2"
        }
        if (stage === "discourse2" && next == true) {
            next = false
            stage = "discourse3"
        }
        if (stage === "discourse3" && next == true) {
            next = false
            stage = "End"
            ending = 9
        }
        if (stage === "discourse1B" && next == true) {
            next = false
            stage = "discourse2B"
        }
        if (stage === "discourse2B" && next == true) {
            next = false
            stage = "discourse3B"
        }
        if (stage === "discourse3B" && next == true) {
            next = false
            stage = "END"
            ending = 9
        }
        if (stage === "discourse1C" && next == true) {
            next = false
            stage = "discourse2C"
        }
        if (stage === "discourse2C" && next == true) {
            next = false
            stage = "END"
            ending = 4
        }
    }
    next = true
}

//セレクション2 つまり 下のボタン ---------------------------------------------------------------------------------------------------------
function selection2() {
    if (stage === "1" && next == true) //stage 1
    {
        stage = "End"
        next = false
        ending = 1
    }
    if (stage === "2" && next == true) //stage 2
    {
        stage = "3"
        Dictatorship + 1
        ChinaRussia = true
        next = false
    }
    if (stage === "3" && next == true) //stage 3
    {
        stage = "4B"
        next = false
        deceased = deceased + 100
        dissatisfaction + 1
    }
    {//4
        if (stage == "4A" && next == true) //stage 4A attack = true 4A
        {
            stage = "5A"
            next = false
            speech1 = true
        }
        {
            if (stage == "4B" && next == true) //stage 4B attack = false  4B
            {
                stage = "5C"
                next = false
                Dictatorship + 2
                Socialism + 2
            }
        }
    }
    //selection2
    {//5
        if (stage == "5A" && next == true) //stage 5A attack = true  5A
        {
            stage = "6B"
            next = false
            deceased = deceased + 100
            vsGuerrilla = true
        }
        if (stage == "5B" && next == true) //stage 5B attack = false  5B
        {
            next = false
            stage = "6B"
            Dictatorship + 1 //:thinking:
            criticism = true
            sixB = true
        }
        if (stage == "5C" && next == true && ChinaRussia == true) //stage 5C
        {
            next = false
            stage = "6D"
            deceased = deceased + 100
        }
        if (stage == "5C" && next == true && NATO == true) {
            next = false
            stage = "6F"
        }
    }
    {//6
        if (stage == "6A" && next == true) //stage 6A attack2 == true 
        {
            dissatisfaction + 1
            vsGuerrillaA = true
            deceased = deceased + 200
            next = false
            stage = "7B"
        }
        if (stage === "6B" && next == true)  //stage 6B
        {
            next = false
            stage = "7C"
        }
        if (stage === "6C" && next == true) //stage 6C
        {
            next = false
            stage = "7F"
        }
        if (stage === "6D" && next == true) //stage 6D
        {
            next = false
            stage = "7H"
        }
        if (stage === "6E" && next == true) //stage 6E
        {
            next = false
            stage = "7J"
        }
        if (stage === "6F" && next == true) //stage 6F
        {
            next = false
            stage = "7L"
        }
    }
    {//7
        if (stage === "7A" && next == true) //大失敗 7A 一部公開 
        {
            next = false
            stage = "8B"
        }
        if (stage === "7B" && next == true) //第三作戦 7B 攻撃
        {
            next = false
            stage = "8D"
            deceased = deceased + 1000
        }
        if (stage === "7C" && next == true) //ストライキ！ 7C 無視
        {
            next = false
            stage = "8F"
        }
        if (stage === "7D" && next == true) //損害 7D 援助
        {
            next = false
            stage = "8H"
        }
        if (stage === "7E" && next == true)//失敗 7E 一部公開 lookゾーン
        {
            next = false
            stage = "8B"
        }
        if (stage === "7F" && next == true) //作戦 7F 通常
        {
            next == false
            stage = "8J"
        }
        if (stage === "7G" && next == true) //失敗
        {
            next == false
            stage = "8L"
        }
        if (stage === "7H" && next == true) //
        {
            next == false
            stage = "8N"
        }
        if (stage === "7J" && next == true) //降伏  look!!
        {
            next == false
            stage = "End"
            ending = 5
        }
    }
    {//8
        if (stage === "8A" && next == true) {
            next = false
            stage = "9A"
        }
        if (stage === "8B") {
            next = false
            stage = "9D"
            deceased = deceased + 700
        }
        if (stage === "8C") {
            next = false
            stage = "9F"
            deceased = deceased + 500
        }
        if (stage === "8D")//成功
        {
            next = false
            stage = "9H"
        }
        if (stage === "8E") {
            next = false
            stage = "9J"
        }
        if (stage === "8F") {
            next = false
            stage = "9L"
        }
        if (stage === "8G") {
            next = false
            stage = "9N"
        }
        if (stage === "8H") {
            next = false
            stage = "9P"
        }
        if (stage === "8I") {
            next = false
            stage = "9R"
        }
        if (stage === "8J") {
            next = false
            stage = "9T"
        }
        if (stage === "8K") {
            next = false
            stage = "9V"
        }
        if (stage === "8L") {
            next = false
            stage = "9X"
        }
        if (stage === "8M") {
            next = false
            stage = "9Z"
        }
        if (stage === "8O") {
            next = false
            stage = "END"
            ending = "9え"
            deceased = deceased + 700
        }
    }
    {//会談
        if (stage === "discourse1" && next == true) {
            next = false
            stage = "discourse2"
        }
        if (stage === "discourse2" && next == true) {
            next = false
            stage = "discourse3"
        }
        if (stage === "discourse3" && next == true) {
            next = false
            stage = "End"
            ending = 8
        }
        if (stage === "discourse1B" && next == true) {
            next = false
            stage = "discourse2B"
        }
        if (stage === "discourse2B" && next == true) {
            next = false
            stage = "discourse3B"
        }
        if (stage === "discourse3B" && next == true) {
            next = false
            stage = "END"
            ending = 8
        }
        if (stage === "discourse1C" && next == true) {
            next = false
            stage = "discourse2C"
        }
        if (stage === "discourse2C" && next == true) {
            next = false
            stage = "END"
            ending = 4
        }
    }
    {//9
        if (stage === "9A" && next == true) {
            next = false
            stage = "10B"
        } if (stage === "9C" && next == true) {
            next = false
            stage = "10D"
        } if (stage === "9D" && next == true) {
            next = false
            stage = "10E"
        } if (stage === "9F" && next == true) {
            next = false
            stage = "10F"
            deceased = deceased + 400
        } if (stage === "9H" && next == true) {
            next = false
            stage = "10G"
            deceased = deceased + 100
        }
        {
            if (stage === "9I" && next == true && NATO == true) {
                next = false
                stage = "10I"
            }
            if (stage === "9I" && next == true && ChinaRussia == true) {
                next = false
                stage = "10K"
            }
        }
        if (stage === "9J" && next == true) {
            next = false
            stage = "10M"
        }
        if (stage === "9K" && next == true) {
            next = false
            stage = "discourse1"
        }
        if (stage === "9L" && next == true) {
            next = false
            stage = "10P"
        }
        if (stage === "9M" && next == true) {
            next = false
            stage = "10R"
        }
        if (stage === "9N" && next == true || stage == "9O" && next == true) {
            next = false
            stage = "discourse1"
        }
        if (stage === "9P" && next == true) {
            next = false
            stage = "discourse1"
        }
        if (stage === "9R" && next == true) {
            next = false
            stage = "10U"
            deceased = deceased + 500
        }
        if (stage === "9T" && next == true) {
            next = false
            stage = "10W"
        }
        if (stage === "9U" && next == true || stage === "9V" && next == true) {
            next = false
            stage = "10Y"
        }
        if (stage === "9W" && next == true) {
            next = false
            stage = "End"
            ending = 3
        }
        if (stage === "9X" && next == true) {
            next = false
            stage = "End"
            ending = 5
        }
        if (stage === "9Z" && next == true) {
            next = false
            stage = "10い"
            deceased = deceased + 500
        }
        if (stage === "9あ" && next == true || stage == "9い" && next == true) {
            next = false
            stage = "End"
            ending = 5
        }
    }//9
    {//10
        if (stage === "10A" && next == true) {
            next = false
            stage = "End"
            ending = 8
        }
        if (stage === "10B" && next == true) {
            next = false
            stage = "End"
            ending = 8
        }
        if (stage === "10C" && next == true || stage === "10D" && next == true) {
            next = false
            stage = "End"
            ending = 6
        }
        if (stage === "10E" && next == true || stage === "10O" && next == true || stage === "10Q" && next == true || stage === "10S" && next == true || stage === "10T" && next == true || stage === "10V" && next == true || stage === "10X" && next == true || stage === "10Y" && next == true) {
            next = false
            stage = "End"
            ending = 8
        }
        if (stage === "10F" && next == true || stage === "10U" && next == true) {
            next = false
            stage = "End"
            ending = 2
        }
        if (stage === "10G" && next == true || stage === "10I" && next == true || stage === "10J" && next == true || stage === "10K" && next == true) {
            next = false
            stage = "End"
            ending = 8
        }
        if (stage === "10H" && next == true) {
            next = false
            stage = "End"
            ending = 6
        }
        if (stage === "10L" && next == true) {
            next = false
            stage = "End"
            ending = 8
        }
        if (stage === "10M" && next == true || stage === "10P" && next == true || stage === "10R" && next == true) {
            next = false
            stage = "End"
            ending = 8
        }

        if (stage === "10N" && next == true) {
            next = false
            stage = "End"
            ending = 8
        }
    }//10
    next = true
}


function saigo() {
    if (stage == "End") {
        Select1.style.display = "none";
        Select2.style.display = "none";
        report.style.display = "none";
        ENDING.style.display = "inline-block";
        debug.style.display = "none";
        if (ending == 1) {
            ENDING.innerHTML = "<br><br>The end <br><br>この内戦により約" + deceased + " 人の死亡者と<br>数十万人の難民が発生した。<br>そして散っていった彼らの犠牲は何だったのか？<br><右クリックしてください。>";
        }
        if (ending == 2) {
            ENDING.innerHTML = "<br><br>The end <br><br>この内戦により約" + deceased + "人の死亡者と<br>数十~百万人の難民が発生した。<br>しかし我々は勝利し、平和が訪れると信じていた。<br><右クリックしてください。>"
        }
        if (ending == 3) {
            ENDING.innerHTML = "<br><br>The end <br><br>この内戦により約" + deceased + "人の死亡者と<br>百万人の難民が発生した。<br>国を捨てた私にもはや居場所はないだろう。<br><右クリックしてください。>"
        }
        if (ending == 4) {
            ENDING.innerHTML = "<br>The end <br><br>この内戦により約" + deceased + "人の死亡者と<br>数十~百万人の難民が発生した。<br>首相の暗殺により新政権が発足したが、<br>不安定だ。<br><右クリックしてください。>"
        }
        if (ending == 5) {
            ENDING.innerHTML = "<br><br>The end <br><br>この内戦により約" + deceased + "人の死亡者と<br>百万人以上の難民が発生した。<br>反政府組織による、独裁政権はいつまで持つか。<br><右クリックしてください>"
        }
        if (ending == 6) {
            ENDING.innerHTML = "<br><br>The end <br><br>この内戦により約" + deceased + "人の死亡者と<br>百万人近くの難民が発生した。<br>ここからどうするか見ものだ。<br><右クリックしてください>"
        }
        if (ending == 7) {
            ENDING.innerHTML = "<br><br>The end <br><br>この内戦により約" + deceased + "人の死亡者と<br>百万人近くの難民が発生した。<br>NATOの介入により、不安定さは増すばかりだ。<br><右クリックしてください>"
        }
        if (ending == 8) {
            ENDING.innerHTML = "<br><br>The end <br><br>この内戦により約" + deceased + "人の死亡者と<br>百万人以上の難民が発生した。<br>この内戦はいつ終わるのだろうか？<br><右クリックしてください>"
        }
        if (ending == 9) {
            ENDING.innerHTML = "<br><br>The end <br><br>この内戦により約" + deceased + "人の死亡者と<br>百万人近くの難民が発生した。<br>停戦は本当に守られるのだろうか。<br><右クリックしてください>"
        }
        if (ending == "9え") {
            ENDING.innerHTML = "<br><br>The end <br><br>この内戦により約" + deceased + "人の死亡者と<br>百万人以上の難民が発生した。<br>会談の結果停戦はされたがどうなるだろうか。<br><右クリックしてください>"
        }
    }
}
function ENDclick() {
    stage = null
    ENDING.innerHTML = "<br>今でもまだこの地球からは<br>紛争が絶えません。<br>今この瞬間にも命の危機に晒されている<br>人々もたくさんいます。<br>そのことを少しでも知ってくれれば嬉しいです。<br>プレイありがとうございました。<br>by Yuba"
}
{//分岐ツリ
    /*
    分岐ツリー  α0.0
    1.敵軍による攻撃
    徹底抗戦  |  亡命
       |        |
       |       END(彼らの死はなんだったのか)
    2.大国からの支援を受ける必要がある
    NATO   |  ロシアや中国
        |      |
    3.反撃に出るか防衛をするか
    反撃だ！  |      防衛だ！------------------|
       |                                    |
    4A.反抗作戦の現状                       4B.防衛の結果
    作戦は続行 | 慰霊演説                      反撃だ！ | 野党どもを黙らせろ！
          ——|——                                |                   |
         5A戦果と作戦                          5B戦果         4.5C民主主義への冒涜
      戦える！|  ゲリラの掃討           前進せよ！|ゲリラの掃討を          |    NATO→
        |           ---|              |          |           |——————---———---------|
    6Aゲリラの脅威     6B空爆        6Aに合流      6Bに合流      5C作戦               5D右傾化
    攻撃|ゲリラの掃討 工場|民間人                              攻撃|防衛              弁明|支援打ち切り
      |      |       ----| ----|                            |  |                 |     |
    7A大失敗,7B大三作戦　7Cｽﾄﾗｲｷ! 7D被害                     6C戦果,6D不満       6E援助の減少,6F滅びの道(badEnd確定ルート)
    隠蔽|一部公表,対話|弾圧,無視|対処,無視|対処          攻撃|ゲリラ掃討,攻撃|和平  
    */
    /*
    lookエンディング 1 彼らの死は何のためだったのか？ エンディング 2 我々の勝利 エンディング 3 逃亡 エンディング 4 革命 5 BadEnd 6 失脚 7 NATOによる平和 8終わらない戦争 9停戦
    */
}