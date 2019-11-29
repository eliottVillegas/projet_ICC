import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { EtudiantService } from '../services/etudiant.service';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  
  constructor(public etudiants:EtudiantService, public conne:ConnexionService) { }

  ngOnInit() {
  }
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  graphOne: Highcharts.Options = {
    chart: {
      backgroundColor: '#00000000',
      type: 'column'
    },
    title: {
      text: 'Proportion des promotions'
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      allowDecimals:false,
      title: {
        text: "Nombre d'étudiants par promotion"
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y} étudiant(s)'
        }
      }
    },
  
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b><br/>'
    },
    series: [{
      data: this.etudiants.promos,
      type: 'column',
      name:"Promotions"
    }],
    credits:{
      enabled:false
    }
  };

  graphTwo: Highcharts.Options = {
    chart: {
      backgroundColor: '#00000000',
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: "Proportion des options"
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [{
      data: this.etudiants.options,
      type: 'pie',
      name:"Options"
    }],
    credits:{
      enabled:false
    }
  };
  chartCallback = function (chart) {  } // optional function, defaults to null
  updateFlag = false; // optional boolean
  oneToOneFlag = true; // optional boolean, defaults to false

}
