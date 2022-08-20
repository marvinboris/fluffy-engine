<?php

namespace App\Models;

use App\Http\Controllers\UtilController;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'company', 'description', 'start_year', 'end_year',
    ];

    protected $appends = [
        'duration', 
    ];

    public function getTitleAttribute($value)
    {
        return UtilController::translatable($value);
    }

    public function getCompanyAttribute($value)
    {
        return UtilController::translatable($value);
    }

    public function getDescriptionAttribute($value)
    {
        return UtilController::translatable($value);
    }

    public function getDurationAttribute()
    {
        return $this->start_year !== $this->end_year ? $this->start_year . '-' . $this->end_year : $this->start_year;
    }
}
