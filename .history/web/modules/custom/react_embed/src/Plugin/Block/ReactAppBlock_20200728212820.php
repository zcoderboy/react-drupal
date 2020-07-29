<?php

namespace Drupal\react_embed\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'ReactBasicBlock' block.
 *
 * @Block(
 *  id = "react_app_block",
 *  admin_label = @Translation("React App"),
 * )
 */
class ReactAppBlock extends BlockBase
{
  /**
   * {@inheritdoc}
   */
  public function build()
  {
    $row = json_decode(file_get_contents('./data.config.json'), true);
    var_dump($row);
    $build = [];
    $build['react_app_block'] = [
      '#markup' => '<div id="react-app"></div>',
      '#attached' => [
        'library' => 'react_embed/react-bundle'
      ],
    ];

    return $build;
  }
}
