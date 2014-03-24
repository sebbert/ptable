define(function() {
        var elements = [
        /*           1     2    3    4    5    6    7    8    9   10   11   12   13    14   15    16   17    18 */
        /* 1 */     'H' ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,   0 ,  0  ,  0 ,  0 , 'He' ,
        /* 2 */     'Li','Be',  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 , 'B' , 'C', 'N' , 'O', 'F' ,'Ne' ,
        /* 3 */     'Na','Mg',  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,'Al' ,'Si', 'P' , 'S','Cl' ,'Ar' ,
        /* 4 */     'K' ,'Ca','Sc','Ti', 'V','Cr','Mn','Fe','Co','Ni','Cu','Zn','Ga' ,'Ge','As' ,'Se','Br' ,'Kr' ,
        /* 5 */     'Rb','Sr', 'Y','Zr','Nb','Mo','Tc','Ru','Rh','Pd','Ag','Cd','In' ,'Sn','Sb' ,'Te', 'I' ,'Xe' ,
        /* 6 */     'Cs','Ba',  0 ,'Hf','Ta', 'W','Re','Os','Ir','Pt','Au','Hg','Tl' ,'Pb','Bi' ,'Po','At' ,'Rn' ,
        /* 7 */     'Fr','Ra',  0 ,'Rf','Db','Sg','Bh','Hs','Mt','Ds','Rg','Cn','Uut','Fl','Uup','Lv','Uus','Uuo',
                      0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0 ,  0  ,  0 ,  0  ,  0 ,  0  ,  0  ,
                      0 ,  0 ,'La','Ce','Pr','Nd','Pm','Sm','Eu','Gd','Tb','Dy','Ho' ,'Er','Tm' ,'Yb','Lu' ,  0  ,
                      0 ,  0 ,'Ac','Th','Pa','U' ,'Np','Pu','Am','Cm','Bk','Cf','Es' ,'Fm','Md' ,'No','Lr' ,  0
        ];

        elements.columns = 18;
        elements.rows = 10;

        elements.elementAtPoint = function(x, y) {
            return this[(y * this.columns) + x];
        }

        elements.coordsAtIndex = function(i) {
            var x = (i % elements.columns);
            var y = Math.floor(i / elements.columns);

            return { x: x, y: y };
        }

        return elements;
});