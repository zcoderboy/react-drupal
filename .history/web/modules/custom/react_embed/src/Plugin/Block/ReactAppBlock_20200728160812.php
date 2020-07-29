<?php

namespace Drupal\react_embed\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'ReactBasicBlock' block.
 *
 * @Block(
 *  id = "ww_react_list_block",
 *  admin_label = @Translation("React list block"),
 * )
 */
class ReactAppBlock extends BlockBase
{

  /**
   * {@inheritdoc}
   */
  public function build()
  {
    $build = [];
    $build['react_list_block'] = [
      '#markup' => '<div id="list-app"></div>',
      '#attached' => [
        'library' => 'ww_react_list/react-list'
      ],
    ];

    return $build;
  }
}
