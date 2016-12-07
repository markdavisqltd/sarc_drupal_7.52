<?php

/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks for the
 * sarc theme.
 */

function sarc_form_alter(&$form, &$form_state, $form_id) {
  if ($form_id == 'search_block_form') {
    $form['actions']['submit']['#value'] = decode_entities('&#xf002;'); // Change the text on the submit button
  }
} 


function sarc_breadcrumb($variables) {
    $breadcrumb = $variables['breadcrumb'];
    if (!empty($breadcrumb)) {
        // Provide a navigational heading to give context for breadcrumb links to
        // screen-reader users. Make the heading invisible with .element-invisible.
        $output = '<h2 class="element-invisible">' . t('You are here') . '</h2>';
        $current_path = current_path();//grab the current path
        $nid = !empty($current_path) ? str_replace("node/","",$current_path) : '';//grab the node ID from current path
        if($nid == '327' || $nid == '325'){
            $output .= '<div class="breadcrumb">' . implode(' » ', $breadcrumb) . ' » <a href="/donate">Donate</a> » ' . strip_tags(drupal_get_title()) . '</div>';
        }else{
            $output .= '<div class="breadcrumb">' . implode(' » ', $breadcrumb) . ' » ' . strip_tags(drupal_get_title()) . '</div>';
        }
        return $output;
    } else {
        $output = '<div class="breadcrumb empty-breadcrumb">&nbsp;</div>';      
        return $output;
    }
}

