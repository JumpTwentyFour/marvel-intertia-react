<?php

namespace App\Http\Policies;

use Spatie\Csp\Directive;
use Spatie\Csp\Policies\Basic;

class ExtendedContentSecurityPolicy extends Basic
{
    public function configure(): void
    {
        parent::configure();

        $this->addDirective(Directive::IMG, 'https://i.annihil.us');
        $this->addDirective(Directive::FONT, 'https://fonts.gstatic.com');
        $this->addDirective(Directive::STYLE, 'https://fonts.googleapis.com');

        if (config('csp.report_only') === true) {
            $this->reportOnly();
        }
    }
}
