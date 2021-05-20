import * as  O1 from './objectives/O1';
import * as  O2 from './objectives/O2';
import * as  O3 from './objectives/O3';
import * as  O4 from './objectives/O4';
import * as  O5 from './objectives/O5';
import * as  O6 from './objectives/O6';
import * as  O7 from './objectives/O7';
import * as  O8 from './objectives/O8';
import * as  O9 from './objectives/O9';
import * as  O10 from './objectives/O10';
import * as  O11 from './objectives/O11';
import * as  O12 from './objectives/O12';
import * as  O13 from './objectives/O13';
import * as  O14 from './objectives/O14';
import * as  O15 from './objectives/O15';
import * as  O16 from './objectives/O16';
import * as  O17 from './objectives/O17';

export var objectives = [O1, O2, O3, O4, O5, O6, O7, O8, O9, O10, O11, O12, O13, O14, O15, O16, O17];
export var currentObj = 0;
export function setCurrentObj(val){
    currentObj = val;
}