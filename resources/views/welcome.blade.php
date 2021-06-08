@extends('layouts.app')

@section('content')
    <router-link to="/" exact> Go To Home </router-link>
    <router-link to="/about"> About Page </router-link>
    <router-view></router-view>
@endsection