

create database dba20;
use dba20;
create table joueur(idj int auto_increment primary key,pseudo varchar(20),pw varchar(20),pays varchar(20),ville varchar(20),dispo int,pg int,pp int,pa int,pnf int,dl int,dg int,dp int,tv int,td int);
create table partienf(idpnf int auto_increment primary key,idj int references joueur(idj),niv int,v1 int,v2 int,v3 int,v4 int,v5 int,v6 int,v7 int,v8 int,v9 int,v10 int,v11 int,v12 int,v13 int,v14 int,v15 int,v16 int,v17 int,v18 int,v19 int,v20 int,v21 int,v22 int,v23 int,v24 int,v25 int);
create table partienf2(idpnf2 int auto_increment primary key,idj int references joueur(idj),niv int,v1 int,v2 int,v3 int,v4 int,v5 int,v6 int,v7 int,v8 int,v9 int,v10 int,v11 int,v12 int,v13 int,v14 int,v15 int,v16 int,v17 int,v18 int,v19 int,v20 int,v21 int,v22 int,v23 int,v24 int,v25 int,v26 int,v27 int,v28 int,v29 int,v30 int,v31 int,v32 int,v33 int,v34 int,v35 int,v36 int,v37 int,v38 int,v39 int,v40 int,v41 int,v42 int,v43 int,v44 int,v45 int,v46 int,v47 int,v48 int,v49 int,v50 int);