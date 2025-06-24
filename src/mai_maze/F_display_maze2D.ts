import { g_debug, g_mes } from "../d_cmn/global";
import { _min, _round, _max } from '../d_utl/F_Math';
import { g_maze, g_team } from "./global_for_maze";

let div: HTMLDivElement;
let cvs: HTMLCanvasElement;

let view_wdth        = 0;
let view_hght        = 0;
let map_wdth         = 0;
let map_hght         = 0;
let size_x: number   = 0;
let size_y: number   = 0;

export function init_maze2D(): void {
    div = document.getElementById('div_maze_vw2D')      as HTMLDivElement;
    cvs = document.getElementById('maze_view2D_canvas') as HTMLCanvasElement;
    calc_view2D_width();
}

// 【初期設定】ViewChの横幅をCSSから読み込んで適合する文字のサイズを計算してセットする
function calc_view2D_width(): void {

    view_wdth  = div.clientWidth;
    view_hght  = div.clientHeight;

    const col    = g_maze.get_x_max() + 1;
    const col_px = view_wdth  / col;

    const row    = g_maze.get_y_max() + 1;
    const row_px = view_hght / row;

    size_x       = _round(_max([15.0, _round(1.00 *  _min([col_px, row_px]), 2)]), 0);
    size_y       = _round(_max([15.0, _round(1.00 *  _min([col_px, row_px]), 2)]), 0);

/*
    cvs.setAttribute('width',  map_wdth.toString());
    cvs.setAttribute('height', map_hght.toString());
    cvs.style.setProperty('font-size',  `${font_size}px`);
    cvs.style.setProperty('line-height',`${line_hght}px`);
*/
}

function calc_view2D_top(): void {

    view_wdth  = div.clientWidth;
    view_hght  = div.clientHeight;

    const pd = g_team.get_pd();

    let top_x =  view_wdth / 2 - (pd.x + 1) * size_x;
//    if (top_x < -view_wdth / 2) top_x = -view_wdth / 2;
//    if (top_x > map_wdth - view_wdth) top_x = map_wdth - view_wdth;

    let top_y =  view_hght / 2 - (pd.y + 1) * size_y;
//    if (top_y < -view_hght / 2) top_y = -view_hght / 2; // バグ対策の適当修正
//    if (top_y > map_hght - view_hght) top_y = map_hght - view_hght;

/*
    cvs.style.setProperty('left',      `${top_x}px`);
    cvs.style.setProperty('top',       `${top_y}px`);
*/
}

export function display_maze2D(): void { 
    if (cvs !== null) {cvs.innerText = to_2D();calc_view2D_top()}
    else g_mes.warning_message('Can not found pre#Maze_viewCh_pre!!');
}

function to_2D(): string {
    const size_x = g_maze.get_x_max();
    const size_y = g_maze.get_y_max();
    const floor  = g_team.get_pd().z

    let ret_str = '';
    for (let y = 0; y < size_y; y++) {
        for (let x = 0; x < size_x; x++) {
            if (!g_debug.isON() && g_maze.is_masked_xyz(x, y, floor)) {
                ret_str += 'Ｘ';
            } else {
                const obj = g_maze.get_obj_xyz(x, y, floor);
                if (obj === null || obj.view() === undefined) {
                    ret_str += g_maze.get_cell_xyz(x, y, floor)?.to_letter();
                } else {
                    const obj_c = obj.view()?.letter() ?? '謎';
                    ret_str += obj_c;
                }
            }
        }
        ret_str += "\n";
    }
    return ret_str;
}

