import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { host } from 'storybook-host';

import SnoozePopup from '../src/lib/components/SnoozePopup';

// TODO: Get sass working with storybook
// import '../src/popup/snooze.scss';

import '../dist/popup/snooze.css';

const sampleEntries = [
  {'time':1483886277592,'title':'The US companies that rely the most on China (ex-tech components)','url':'https://www.theatlas.com/charts/SJ99cpGXe','windowId':0},
  {'time':1481812681250,'title':'Apple (AAPL) is reportedly in talks with movie studios to offer online rentals of films that are still in theaters — Quartz','url':'http://qz.com/858244/apple-aapl-is-reportedly-in-talks-with-movie-studios-to-offer-online-rentals-of-films-that-are-still-in-theaters/','windowId':0},
  {'time':1481294285247,'title':'Startup investors value entrepreneurs\' willingness to learn more than business acumen and college degrees — Quartz','url':'http://qz.com/858058/startup-investors-value-entrepreneurs-willingness-to-learn-more-than-business-acumen-and-college-degrees/','windowId':0},
  {'time':1485545916931,'title':'\'Impunity has consequences\': the women lost to Mexico\'s drug war | World news | The Guardian','url':'https://www.theguardian.com/world/2016/dec/08/mexico-drug-war-cartels-women-killed','windowId':0},
  {'time':1486755526736,'title':'Dinosaur tail trapped in amber offers insights into feather evolution | Science | The Guardian','url':'https://www.theguardian.com/science/2016/dec/08/dinosaur-tail-trapped-in-amber-offers-insights-into-feather-evolution','windowId':0},
  {'time':1481225942778,'title':'White Helmets in east Aleppo plead for help after regime advances | World news | The Guardian','url':'https://www.theguardian.com/world/2016/dec/08/white-helmets-in-east-aleppo-plead-for-help-as-regime-advances','windowId':0},
  {'time':1483886277592,'title':'The US companies that rely the most on China (ex-tech components)','url':'https://www.theatlas.com/charts/SJ99cpGXe','windowId':0},
  {'time':1481812681250,'title':'Apple (AAPL) is reportedly in talks with movie studios to offer online rentals of films that are still in theaters — Quartz','url':'http://qz.com/858244/apple-aapl-is-reportedly-in-talks-with-movie-studios-to-offer-online-rentals-of-films-that-are-still-in-theaters/','windowId':0},
  {'time':1481294285247,'title':'Startup investors value entrepreneurs\' willingness to learn more than business acumen and college degrees — Quartz','url':'http://qz.com/858058/startup-investors-value-entrepreneurs-willingness-to-learn-more-than-business-acumen-and-college-degrees/','windowId':0},
  {'time':1485545916931,'title':'\'Impunity has consequences\': the women lost to Mexico\'s drug war | World news | The Guardian','url':'https://www.theguardian.com/world/2016/dec/08/mexico-drug-war-cartels-women-killed','windowId':0},
  {'time':1486755526736,'title':'Dinosaur tail trapped in amber offers insights into feather evolution | Science | The Guardian','url':'https://www.theguardian.com/science/2016/dec/08/dinosaur-tail-trapped-in-amber-offers-insights-into-feather-evolution','windowId':0},
  {'time':1481225942778,'title':'White Helmets in east Aleppo plead for help after regime advances | World news | The Guardian','url':'https://www.theguardian.com/world/2016/dec/08/white-helmets-in-east-aleppo-plead-for-help-as-regime-advances','windowId':0}
];

const commonProps = {
  tabIsSnoozable: true,
  switchPanel: name => linkTo('SnoozePopup (on toolbar)', name)(),
  scheduleSnoozedTab: action('scheduleSnoozedTab'),
  openSnoozedTab: action('openSnoozedTab'),
  cancelSnoozedTab: action('cancelSnoozedTab'),
  updateSnoozedTab: action('updateSnoozedTab')
};

storiesOf('SnoozePopup (on toolbar)', module)
  .addDecorator(host({
    width: 320, height: 476, border: '1px solid #ccc'
  }))
  .add('main', () => (
    <SnoozePopup
      {...commonProps}
      {...{ activePanel: 'main', entries: [] }} />
  ))
  .add('manage (empty)', () => (
    <SnoozePopup
      {...commonProps}
      {...{
        activePanel: 'manage',
        entries: []
      }} />
  ))
  .add('manage (few entries)', () => (
    <SnoozePopup
      {...commonProps}
      {...{
        activePanel: 'manage',
        entries: sampleEntries.slice(0, 2)
      }} />
  ))
  .add('manage (scrolling)', () => (
    <SnoozePopup
      {...commonProps}
      {...{
        activePanel: 'manage',
        entries: sampleEntries
      }} />
  ))
  .add('manage (empty, no-snooze tab)', () => (
    <SnoozePopup
      {...commonProps}
      {...{
        tabIsSnoozable: false,
        activePanel: 'manage',
        entries: []
      }} />
  ))
  .add('manage (few entries, no-snooze tab)', () => (
    <SnoozePopup
      {...commonProps}
      {...{
        tabIsSnoozable: false,
        activePanel: 'manage',
        entries: sampleEntries.slice(0, 2)
      }} />
  ))
  .add('manage (scrolling, no-snooze tab)', () => (
    <SnoozePopup
      {...commonProps}
      {...{
        tabIsSnoozable: false,
        activePanel: 'manage',
        entries: sampleEntries
      }} />
  ));

const narrowCommonProps = {
  ...commonProps,
  narrowPopup: true,
  switchPanel: name => linkTo('SnoozePopup (in menu)', name)()
};

storiesOf('SnoozePopup (in menu)', module)
  .addDecorator(host({
    width: 230, height: 575, border: '1px solid #ccc'
  }))
  .add('main', () => (
    <SnoozePopup
      {...narrowCommonProps}
      {...{ activePanel: 'main', entries: [] }} />
  ))
  .add('manage (empty)', () => (
    <SnoozePopup
      {...narrowCommonProps}
      {...{
        activePanel: 'manage',
        entries: []
      }} />
  ))
  .add('manage (few entries)', () => (
    <SnoozePopup
      {...narrowCommonProps}
      {...{
        activePanel: 'manage',
        entries: sampleEntries.slice(0, 2)
      }} />
  ))
  .add('manage (scrolling)', () => (
    <SnoozePopup
      {...narrowCommonProps}
      {...{
        activePanel: 'manage',
        entries: sampleEntries
      }} />
  ))
  .add('manage (empty, no-snooze tab)', () => (
    <SnoozePopup
      {...narrowCommonProps}
      {...{
        tabIsSnoozable: false,
        activePanel: 'manage',
        entries: []
      }} />
  ))
  .add('manage (few entries, no-snooze tab)', () => (
    <SnoozePopup
      {...narrowCommonProps}
      {...{
        tabIsSnoozable: false,
        activePanel: 'manage',
        entries: sampleEntries.slice(0, 2)
      }} />
  ))
  .add('manage (scrolling, no-snooze tab)', () => (
    <SnoozePopup
      {...narrowCommonProps}
      {...{
        tabIsSnoozable: false,
        activePanel: 'manage',
        entries: sampleEntries
      }} />
  ));
