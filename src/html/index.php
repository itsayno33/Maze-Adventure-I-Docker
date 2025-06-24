<?php 
    declare(strict_types=1);

// 本番環境はURLの先頭を書き換える
//    $db_host = '127.0.0.1';
    $db_host = 'sql';

    // 日本語の利用
    mb_internal_encoding("UTF-8");
    mb_regex_encoding("UTF-8");

    // 利用クラス等の読み込み
    require_once './lib/Class_DspMessage.php'; // 画面メッセージの表示用クラス


/*******************************************************************************/
/*                                                                             */
/*                                 主　処　理                                   */
/*                                                                             */
/*******************************************************************************/

    init();
    switch ($ga->mode) {
        case 'new':
            break;
        default:
            break;
    }

//////////////////////////////////////////////
///   サブルーチン
//////////////////////////////////////////////


/*******************************************************************************/
/*                                                                             */
/*                             画　面　表　示　関　連                            */
/*                                                                             */
/*******************************************************************************/



/*******************************************************************************/
/*                                                                             */
/*                                初　期　設　定                                */
/*                                                                             */
/*******************************************************************************/

    function init(): void {
        global $gv,$ga;
        $gv = new GlobalVar();
        $ga = new GlobalArguments();
    
        return;
    }

//////////////////////////////////////////////
/////
/////     クラス宣言
/////
//////////////////////////////////////////////

    // 大域変数の設定
    class GlobalVar {
        public DspMessage $mes;
        public string $script_path;
        public string $cgi_base;
        public string $cgi_home;

        public string $icon_home;

        public PDO    $mmd_db;
        public function __construct() {
            global $db_host;

            $this->mes = new DspMessage( /* isHTML = */ true);
            $this->script_path = $_SERVER['SCRIPT_NAME'];
            $this->cgi_base    = pathinfo($this->script_path, PATHINFO_DIRNAME);
            $this->cgi_home    = dirname ($this->cgi_base);
            $this->icon_home   = "{$this->cgi_home}/icon-img/kkrn_icon_home_3.png";

            $this->mmd_db      = PDO_db_open(); 
        }

        public function is_error (): bool {
            return $this->mes->is_err();
        }
    }
    
        // POST引数の設定

        class GlobalArguments {
        public string $mode;
        public int    $pid = 1;
        public string $opt = '';

        public function __construct() {
            global $gv;

            if ( array_key_exists('mode', $_GET) && $_GET['mode'] != '') {
                $this->mode         = $_GET ['mode'];
            } else {
                if ( array_key_exists('mode', $_POST) &&  $_POST['mode'] != '') {
                    $this->mode     = $_POST['mode'];
                } else {
                    $this->mode     = 'new';
                } 
            }
            if ( array_key_exists('pid', $_GET) && is_numeric($_GET['pid'])) {
                $this->pid          = intval($_GET ['pid']);
            } else {
                if ( array_key_exists('pid', $_POST) &&  is_numeric($_POST['pid'])) {
                    $this->pid      = intval($_POST['pid']);
                } else {
                    $this->pid      = 1;
                } 
            }
            if ( array_key_exists('opt', $_GET) && is_string($_GET['opt'])) {
                $this->opt          = $_GET ['opt'];
            } else {
                if ( array_key_exists('opt', $_POST) &&  is_string($_POST['opt'])) {
                    $this->opt      = $_POST['opt'];
                } else {
                    $this->opt      = '';
                } 
            }
            $gv->mes->set_nor_message("MODE = [{$this->mode}]");
        }
    }
 
    

    function pdo_error1(PDOException $e, string $errmsg): void {
        global $gv;
        $gv->mes->set_err_message($errmsg);
        $gv->mes->set_err_message("{$e->getCode()}");
        $gv->mes->set_err_message("{$e->getMessage()}");
        return;
    }

    function pdo_error2(Error $e, string $errmsg): void {
        global $gv;
        $gv->mes->set_err_message($errmsg);
        $gv->mes->set_err_message("{$e->getCode()}");
        $gv->mes->set_err_message("{$e->getMessage()}");
        return;
    }
    

    function PDO_db_open(): PDO {

        // データベース関連定数
        $db_options =  array(
            // SQL実行失敗時には例外をスローしてくれる
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            // カラム名をキーとする連想配列で取得する．これが一番ポピュラーな設定
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            // ページ終了時に終わらない持続的な接続を使う 
            // PDO::ATTR_PERSISTENT => true,
            // バッファードクエリを使う(一度に結果セットをすべて取得し、サーバー負荷を軽減)
            // SELECTで得た結果に対してもrowCountメソッドを使えるようにする
            // PDO::MYSQL_ATTR_USE_BUFFERED_QUERY => true,
        );

        try {
            $dsn = 'mysql:host=sql;dbname=db_mai;charset=utf8mb4';
            $dbh = new PDO($dsn, 'itsayno33', 'PE333833',$db_options);
        } catch (PDOException $e) {
            pdo_error1($e, "データベース接続エラー: {$dsn}");
        }
        return $dbh;
    }

?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0 ,user-scalable=0, shrink-to-fit=no, viewport-fit=cover">
    <title>Maze Adventure I</title>
    <link rel="stylesheet" href="css.php?time=<?php echo date("Y-m-d_H:i:s"); ?>&file=mai_indx" />
</head>
<body id='body'>
    <article id='indx_head_pane'>
        <h1 class='h1' id='h1'>ダンジョンアドベンチャーⅠ</h1>
        <p id='head_message'></p>
    </article>
    <article id='indx_menu_list_pane'>
        <h2>冒険の入り口</h2>
        <ul id='indx_menu_list'>
            <li id='indx_guld'>
                <a href='mai_guld.php'>冒険者ギルド</a>
                <p>　仲間を募れます</p></li>
            <li id='indx_maze'>
                <a href='mai_maze.php'>冒険出発</a>
                <p>　ダンジョンに出発します</p></li>
        </ul>
    </article>
    <article id='sytm_logs_pane'>
        <div id='client_message'></div>
        <?php 
            $gv->mes->display_err_message(); 
            $gv->mes->display_nor_message(); 
        ?>
    </article>
    <footer id='foot_pane'>
        <a href='/'><img src='./icon-img/kkrn_icon_home_3.png' /></a>
        <p class='foot_print'>Guild in Maze Adventure I.</p>
    </footer>
    <!-- script>
        window.tsCall.start_game(
            '<?php echo $ga->mode; ?>', 
            '<?php echo $gv->script_path; ?>', 
             <?php echo $ga->pid; ?>, 
            '<?php echo $ga->opt; ?>', 
        );
    </script -->
</body>
<?php
    // 大域変数の開放
    $gv  = null;
    // POST引数の解放
    $ga  = null;
?>
</html>

